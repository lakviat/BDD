$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/datatablesSO.feature");
formatter.feature({
  "name": "Testing datatables website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.step({
  "name": "User should enter firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter position \"\u003cposition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter office \"\u003coffice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter extension \"\u003cextension\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter start date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter salary \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters first name \"\u003cfirstname\u003e\" to search box",
  "keyword": "And "
});
formatter.step({
  "name": "User should see first name \"\u003cfirstname\u003e\" is inserted in the table",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for datatables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "position",
        "office",
        "extension",
        "date",
        "salary"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    },
    {
      "cells": [
        "joe",
        "wong",
        "working",
        "chicago",
        "312",
        "2019-11-01",
        "150000"
      ]
    },
    {
      "cells": [
        "adam",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "jen",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    },
    {
      "cells": [
        "daughter",
        "sandler",
        "actor",
        "cali",
        "310",
        "2019-10-10",
        "250000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"john\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[@class\u003d\u0027sorting_1\u0027]\"}\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n*** Element info: {Using\u003dxpath, value\u003d//td[@class\u003d\u0027sorting_1\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:157)\n\tat ✽.User should see first name \"joe\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"adam\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"jen\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"daughter\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"john\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"joe\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"adam\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"jen\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"daughter\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"john\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"joe\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"adam\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"jen\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"daughter\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"john\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"joe\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"adam\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"jen\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:160)\n\tat ✽.User should see first name \"daughter\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n*** Element info: {Using\u003dxpath, value\u003d//td[@class\u003d\u0027sorting_1\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat steps.Datatables.user_should_see_first_name_is_inserted_in_the_table(Datatables.java:157)\n\tat ✽.User should see first name \"john\" is inserted in the table(src/test/resources/features/datatablesSO.feature:18)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat jdk.internal.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"joe\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"wong\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"working\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"chicago\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"312\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-11-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"150000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"joe\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"joe\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat jdk.internal.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"adam\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"adam\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat jdk.internal.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"jen\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"jen\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"jen\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Datatables.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.Datatables\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027apples-MBP-3.lan\u0027, ip: \u0027fe80:0:0:0:1083:52fa:fffe:aa4f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: /var/folders/yx/pmk45w3x1sq...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59299}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: 3787ad65286f5184eaadb2241bc9fa74\n\tat jdk.internal.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat utilities.Driver.getDriver(Driver.java:36)\n\tat pages.DatatablesPage.\u003cinit\u003e(DatatablesPage.java:15)\n\tat steps.Datatables.\u003cinit\u003e(Datatables.java:12)\n\t... 36 more\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter firstname \"daughter\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter lastname \"sandler\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter position \"actor\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_position(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter office \"cali\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_office(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter extension \"310\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_extension(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter start date \"2019-10-10\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should enter salary \"250000\"",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_should_enter_salary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_click_to_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters first name \"daughter\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "Datatables.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see first name \"daughter\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatables.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
});