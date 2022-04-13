"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5721],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={},l="Step 6: Read Data",p={unversionedId:"connector-development/tutorials/cdk-tutorial-python-http/read-data",id:"connector-development/tutorials/cdk-tutorial-python-http/read-data",title:"Step 6: Read Data",description:"Describing schemas is good and all, but at some point we have to start reading data! So let's get to work. But before, let's describe what we're about to do:",source:"@site/../docs/connector-development/tutorials/cdk-tutorial-python-http/6-read-data.md",sourceDirName:"connector-development/tutorials/cdk-tutorial-python-http",slug:"/connector-development/tutorials/cdk-tutorial-python-http/read-data",permalink:"/airbyte/connector-development/tutorials/cdk-tutorial-python-http/read-data",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/connector-development/tutorials/cdk-tutorial-python-http/6-read-data.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 5: Declare the Schema",permalink:"/airbyte/connector-development/tutorials/cdk-tutorial-python-http/declare-schema"},next:{title:"Step 7: Use the Connector in Airbyte",permalink:"/airbyte/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte"}},d={},c=[{value:"Adding incremental sync",id:"adding-incremental-sync",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-6-read-data"},"Step 6: Read Data"),(0,o.kt)("p",null,"Describing schemas is good and all, but at some point we have to start reading data! So let's get to work. But before, let's describe what we're about to do:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpStream")," superclass, like described in the ",(0,o.kt)("a",{parentName:"p",href:"/airbyte/connector-development/cdk-python/http-streams"},"concepts documentation"),", is facilitating reading data from HTTP endpoints. It contains built-in functions or helpers for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"authentication"),(0,o.kt)("li",{parentName:"ul"},"pagination"),(0,o.kt)("li",{parentName:"ul"},"handling rate limiting or transient errors"),(0,o.kt)("li",{parentName:"ul"},"and other useful functionality")),(0,o.kt)("p",null,"In order for it to be able to do this, we have to provide it with a few inputs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the URL base and path of the endpoint we'd like to hit"),(0,o.kt)("li",{parentName:"ul"},"how to parse the response from the API"),(0,o.kt)("li",{parentName:"ul"},"how to perform pagination")),(0,o.kt)("p",null,"Optionally, we can provide additional inputs to customize requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"request parameters and headers"),(0,o.kt)("li",{parentName:"ul"},"how to recognize rate limit errors, and how long to wait ","(","by default it retries 429 and 5XX errors using exponential backoff",")"),(0,o.kt)("li",{parentName:"ul"},"HTTP method and request body if applicable"),(0,o.kt)("li",{parentName:"ul"},"configure exponential backoff policy")),(0,o.kt)("p",null,"Backoff policy options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"retry_factor")," Specifies factor for exponential backoff policy ","(","by default is 5",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_retries")," Specifies maximum amount of retries for backoff policy ","(","by default is 5",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"raise_on_http_errors")," If set to False, allows opting-out of raising HTTP code exception ","(","by default is True",")")),(0,o.kt)("p",null,"There are many other customizable options - you can find them in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/streams/http/http.py"},(0,o.kt)("inlineCode",{parentName:"a"},"airbyte_cdk.sources.streams.http.HttpStream"))," class."),(0,o.kt)("p",null,"So in order to read data from the exchange rates API, we'll fill out the necessary information for the stream to do its work. First, we'll implement a basic read that just reads the last day's exchange rates, then we'll implement incremental sync using stream slicing."),(0,o.kt)("p",null,"Let's begin by pulling data for the last day's rates by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"/latest")," endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class ExchangeRates(HttpStream):\n    url_base = "https://api.exchangeratesapi.io/"\n\n    primary_key = None\n\n    def __init__(self, base: str, **kwargs):\n        super().__init__()\n        self.base = base\n\n\n    def path(\n        self, \n        stream_state: Mapping[str, Any] = None, \n        stream_slice: Mapping[str, Any] = None, \n        next_page_token: Mapping[str, Any] = None\n    ) -> str:\n        # The "/latest" path gives us the latest currency exchange rates\n        return "latest"  \n\n    def request_params(\n            self,\n            stream_state: Mapping[str, Any],\n            stream_slice: Mapping[str, Any] = None,\n            next_page_token: Mapping[str, Any] = None,\n    ) -> MutableMapping[str, Any]:\n        # The api requires that we include the base currency as a query param so we do that in this method\n        return {\'base\': self.base}\n\n    def parse_response(\n            self,\n            response: requests.Response,\n            stream_state: Mapping[str, Any],\n            stream_slice: Mapping[str, Any] = None,\n            next_page_token: Mapping[str, Any] = None,\n    ) -> Iterable[Mapping]:\n        # The response is a simple JSON whose schema matches our stream\'s schema exactly, \n        # so we just return a list containing the response\n        return [response.json()]\n\n    def next_page_token(self, response: requests.Response) -> Optional[Mapping[str, Any]]:\n        # The API does not offer pagination, \n        # so we return None to indicate there are no more pages in the response\n        return None\n')),(0,o.kt)("p",null,"This may look big, but that's just because there are lots of ","(","unused, for now",")"," parameters in these methods ","(","those can be hidden with Python's ",(0,o.kt)("inlineCode",{parentName:"p"},"**kwargs"),", but don't worry about it for now",")",'. Really we just added a few lines of "significant" code: 1. Added a constructor ',(0,o.kt)("inlineCode",{parentName:"p"},"__init__")," which stores the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," currency to query for. 2. ",(0,o.kt)("inlineCode",{parentName:"p"},"return {'base': self.base}")," to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"?base=<base-value>")," query parameter to the request based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," input by the user. 3. ",(0,o.kt)("inlineCode",{parentName:"p"},"return [response.json()]")," to parse the response from the API to match the schema of our schema ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file. 4. ",(0,o.kt)("inlineCode",{parentName:"p"},'return "latest"')," to indicate that we want to hit the ",(0,o.kt)("inlineCode",{parentName:"p"},"/latest")," endpoint of the API to get the latest exchange rate data."),(0,o.kt)("p",null,"Let's also pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," parameter input by the user to the stream class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def streams(self, config: Mapping[str, Any]) -> List[Stream]:\n        auth = NoAuth()\n        return [ExchangeRates(authenticator=auth, base=config['base'])]\n")),(0,o.kt)("p",null,"We're now ready to query the API!"),(0,o.kt)("p",null,"To do this, we'll need a ",(0,o.kt)("a",{parentName:"p",href:"/airbyte/understanding-airbyte/beginners-guide-to-catalog"},"ConfiguredCatalog"),". We've prepared one ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/docs/tutorials/http_api_source_assets/configured_catalog.json"},"here")," -- download this and place it in ",(0,o.kt)("inlineCode",{parentName:"p"},"sample_files/configured_catalog.json"),". Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"}," python main.py read --config sample_files/config.json --catalog sample_files/configured_catalog.json\n")),(0,o.kt)("p",null,"you should see some output lines, one of which is a record from the API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'{"type": "RECORD", "record": {"stream": "exchange_rates", "data": {"base": "USD", "rates": {"GBP": 0.7196938353, "HKD": 7.7597848573, "IDR": 14482.4824162185, "ILS": 3.2412081092, "DKK": 6.1532478279, "INR": 74.7852709971, "CHF": 0.915763343, "MXN": 19.8439387671, "CZK": 21.3545717832, "SGD": 1.3261894911, "THB": 31.4398014067, "HRK": 6.2599917253, "EUR": 0.8274720728, "MYR": 4.0979726934, "NOK": 8.3043442284, "CNY": 6.4856433595, "BGN": 1.61836988, "PHP": 48.3516756309, "PLN": 3.770872983, "ZAR": 14.2690111709, "CAD": 1.2436905254, "ISK": 124.9482829954, "BRL": 5.4526272238, "RON": 4.0738932561, "NZD": 1.3841125362, "TRY": 8.3101365329, "JPY": 108.0182043856, "RUB": 74.9555647497, "KRW": 1111.7583781547, "USD": 1.0, "AUD": 1.2840711626, "HUF": 300.6206040546, "SEK": 8.3829540753}, "date": "2021-04-26"}, "emitted_at": 1619498062000}}\n')),(0,o.kt)("p",null,"There we have it - a stream which reads data in just a few lines of code!"),(0,o.kt)("p",null,"We theoretically ",(0,o.kt)("em",{parentName:"p"},"could")," stop here and call it a connector. But let's give adding incremental sync a shot."),(0,o.kt)("h2",{id:"adding-incremental-sync"},"Adding incremental sync"),(0,o.kt)("p",null,"To add incremental sync, we'll do a few things: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pass the ",(0,o.kt)("inlineCode",{parentName:"li"},"start_date")," param input by the user into the stream. "),(0,o.kt)("li",{parentName:"ol"},"Declare the stream's ",(0,o.kt)("inlineCode",{parentName:"li"},"cursor_field"),". "),(0,o.kt)("li",{parentName:"ol"},"Declare the stream's property ",(0,o.kt)("inlineCode",{parentName:"li"},"_cursor_value")," to hold the state value"),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"IncrementalMixin")," to the list of the ancestors of the stream and implement setter and getter of the ",(0,o.kt)("inlineCode",{parentName:"li"},"state"),"."),(0,o.kt)("li",{parentName:"ol"},"Implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"stream_slices")," method. "),(0,o.kt)("li",{parentName:"ol"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," method to specify the date to pull exchange rates for. "),(0,o.kt)("li",{parentName:"ol"},"Update the configured catalog to use ",(0,o.kt)("inlineCode",{parentName:"li"},"incremental")," sync when we're testing the stream.")),(0,o.kt)("p",null,"We'll describe what each of these methods do below. Before we begin, it may help to familiarize yourself with how incremental sync works in Airbyte by reading the ",(0,o.kt)("a",{parentName:"p",href:"/airbyte/understanding-airbyte/connections/incremental-append"},"docs on incremental"),"."),(0,o.kt)("p",null,"To keep things concise, we'll only show functions as we edit them one by one."),(0,o.kt)("p",null,"Let's get the easy parts out of the way and pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"start_date"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def streams(self, config: Mapping[str, Any]) -> List[Stream]:\n        auth = NoAuth()\n        # Parse the date from a string into a datetime object\n        start_date = datetime.strptime(config['start_date'], '%Y-%m-%d') \n        return [ExchangeRates(authenticator=auth, base=config['base'], start_date=start_date)]\n")),(0,o.kt)("p",null,"Let's also add this parameter to the constructor and declare the ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor_field"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime, timedelta\n\n\nclass ExchangeRates(HttpStream, IncrementalMixin):\n    url_base = "https://api.exchangeratesapi.io/"\n    cursor_field = "date"\n    primary_key = "date"\n\n    def __init__(self, base: str, start_date: datetime, **kwargs):\n        super().__init__()\n        self.base = base\n        self.start_date = start_date\n        self._cursor_value = None\n')),(0,o.kt)("p",null,"Declaring the ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor_field")," informs the framework that this stream now supports incremental sync. The next time you run ",(0,o.kt)("inlineCode",{parentName:"p"},"python main_dev.py discover --config sample_files/config.json")," you'll find that the ",(0,o.kt)("inlineCode",{parentName:"p"},"supported_sync_modes")," field now also contains ",(0,o.kt)("inlineCode",{parentName:"p"},"incremental"),"."),(0,o.kt)("p",null,"But we're not quite done with supporting incremental, we have to actually emit state! We'll structure our state object very simply: it will be a ",(0,o.kt)("inlineCode",{parentName:"p"},"dict")," whose single key is ",(0,o.kt)("inlineCode",{parentName:"p"},"'date'")," and value is the date of the last day we synced data from. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"{'date': '2021-04-26'}")," indicates the connector previously read data up until April 26th and therefore shouldn't re-read anything before April 26th."),(0,o.kt)("p",null,"Let's do this by implementing the getter and setter for the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExchangeRates")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    @property\n    def state(self) -> Mapping[str, Any]:\n        if self._cursor_value:\n            return {self.cursor_field: self._cursor_value.strftime('%Y-%m-%d')}\n        else:\n            return {self.cursor_field: self.start_date.strftime('%Y-%m-%d')}\n    \n    @state.setter\n    def state(self, value: Mapping[str, Any]):\n       self._cursor_value = datetime.strptime(value[self.cursor_field], '%Y-%m-%d')\n")),(0,o.kt)("p",null,"Update internal state ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor_value")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"read_records")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def read_records(self, *args, **kwargs) -> Iterable[Mapping[str, Any]]:\n        for record in super().read_records(*args, **kwargs):\n            if self._cursor_value:\n                latest_record_date = datetime.strptime(record[self.cursor_field], '%Y-%m-%d')\n                self._cursor_value = max(self._cursor_value, latest_record_date)\n            yield record\n\n")),(0,o.kt)("p",null,'This implementation compares the date from the latest record with the date in the current state and takes the maximum as the "new" state object.'),(0,o.kt)("p",null,"We'll implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_slices")," method to return a list of the dates for which we should pull data based on the stream state if it exists:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def _chunk_date_range(self, start_date: datetime) -> List[Mapping[str, Any]]:\n        \"\"\"\n        Returns a list of each day between the start date and now.\n        The return value is a list of dicts {'date': date_string}.\n        \"\"\"\n        dates = []\n        while start_date < datetime.now():\n            dates.append({self.cursor_field: start_date.strftime('%Y-%m-%d')})\n            start_date += timedelta(days=1)\n        return dates\n\n    def stream_slices(self, sync_mode, cursor_field: List[str] = None, stream_state: Mapping[str, Any] = None) -> Iterable[Optional[Mapping[str, Any]]]:\n        start_date = datetime.strptime(stream_state[self.cursor_field], '%Y-%m-%d') if stream_state and self.cursor_field in stream_state else self.start_date\n        return self._chunk_date_range(start_date)\n")),(0,o.kt)("p",null,"Each slice will cause an HTTP request to be made to the API. We can then use the information present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_slice")," parameter ","(","a single element from the list we constructed in ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_slices")," above",")"," to set other configurations for the outgoing request like ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"request_params"),". For more info about stream slicing, see ",(0,o.kt)("a",{parentName:"p",href:"/airbyte/connector-development/cdk-python/stream-slices"},"the slicing docs"),"."),(0,o.kt)("p",null,"In order to pull data for a specific date, the Exchange Rates API requires that we pass the date as the path component of the URL. Let's override the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," method to achieve this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def path(self, stream_state: Mapping[str, Any] = None, stream_slice: Mapping[str, Any] = None, next_page_token: Mapping[str, Any] = None) -> str:\n    return stream_slice['date']\n")),(0,o.kt)("p",null,"With these changes, your implementation should look like the file ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-python-http-tutorial/source_python_http_tutorial/source.py"},"here"),"."),(0,o.kt)("p",null,"The last thing we need to do is change the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync_mode")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"sample_files/configured_catalog.json")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"incremental"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'"sync_mode": "incremental",\n')),(0,o.kt)("p",null,"We should now have a working implementation of incremental sync!"),(0,o.kt)("p",null,"Let's try it out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"python main.py read --config sample_files/config.json --catalog sample_files/configured_catalog.json\n")),(0,o.kt)("p",null,"You should see a bunch of ",(0,o.kt)("inlineCode",{parentName:"p"},"RECORD")," messages and ",(0,o.kt)("inlineCode",{parentName:"p"},"STATE")," messages. To verify that incremental sync is working, pass the input state back to the connector and run it again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# Save the latest state to sample_files/state.json\npython main.py read --config sample_files/config.json --catalog sample_files/configured_catalog.json | grep STATE | tail -n 1 | jq .state.data > sample_files/state.json\n\n# Run a read operation with the latest state message\npython main.py read --config sample_files/config.json --catalog sample_files/configured_catalog.json --state sample_files/state.json\n")),(0,o.kt)("p",null,"You should see that only the record from the last date is being synced! This is acceptable behavior, since Airbyte requires at-least-once delivery of records, so repeating the last record twice is OK."),(0,o.kt)("p",null,"With that, we've implemented incremental sync for our connector!"))}m.isMDXComponent=!0}}]);