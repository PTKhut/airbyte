#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from unittest.mock import MagicMock

import pytest
import responses
from airbyte_cdk.utils.traced_exception import AirbyteTracedException
from source_jira.source import SourceJira


@responses.activate
def test_streams(config):
    source = SourceJira()
    streams = source.streams(config)
    expected_streams_number = 51
    assert len(streams) == expected_streams_number


@responses.activate
def test_check_connection(config, projects_response, labels_response):
    responses.add(
        responses.GET,
        f"https://{config['domain']}/rest/api/3/project/search?maxResults=50&expand=description%2Clead",
        json=projects_response,
    )
    responses.add(
        responses.GET,
        f"https://{config['domain']}/rest/api/3/label?maxResults=50",
        json=labels_response,
    )
    source = SourceJira()
    logger_mock = MagicMock()

    assert source.check_connection(logger=logger_mock, config=config) == (True, None)


@responses.activate
def test_check_connection_config_error(config, caplog):
    responses.add(
        responses.GET,
        f"https://{config['domain']}/rest/api/3/project/search?maxResults=50&expand=description%2Clead",
        status=401
    )
    responses.add(
        responses.GET,
        f"https://{config['domain']}/rest/api/3/label?maxResults=50",
        status=401
    )
    source = SourceJira()
    logger_mock = MagicMock()
    with pytest.raises(AirbyteTracedException):
        source.check_connection(logger=logger_mock, config=config)

    assert "Invalid creds were provided, please check your api token, domain and/or email." in caplog.text


@responses.activate
def test_check_connection_404_error(config, projects_response, labels_response):
    responses.add(
        responses.GET,
        f"https://{config['domain']}/rest/api/3/project/search?maxResults=50&expand=description%2Clead",
        status=404,
        json={'errorMessages': ['Not Found project.']}
    )
    responses.add(
        responses.GET,
        f"https://{config['domain']}/rest/api/3/label?maxResults=50",
        status=404,
        json={'errorMessages': ['Not Found Labels.']}
    )
    source = SourceJira()
    logger_mock = MagicMock()
    is_connected, reason = source.check_connection(logger=logger_mock, config=config)
    assert is_connected is False
    assert "Not Found Labels. 404 Client Error: Not Found for url" in reason


def test_get_authenticator(config):
    source = SourceJira()
    authenticator = source.get_authenticator(config=config)

    assert authenticator.get_auth_header() == {'Authorization': 'Basic ZW1haWxAZW1haWwuY29tOnRva2Vu'}
