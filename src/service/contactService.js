// services
            myApp.factory('ContactService', [function () {
            var factory = {};

            factory.getContacts = function () {
                return contactList;
            }

            // contact list, usually would be a separate database
            var contactList = [{
                        "firstname": "Cynthie",
                        "lastname": "Buckenham",
                        "email": "cbuckenham0@fotki.com",
                        "phone": "866-535-8393",
                        "status": false
                    }, {
                        "firstname": "Scotty",
                        "lastname": "Dutteridge",
                        "email": "sdutteridge1@bloomberg.com",
                        "phone": "475-473-7420",
                        "status": false
                    }, {
                        "firstname": "Shannon",
                        "lastname": "Froschauer",
                        "email": "sfroschauer2@nba.com",
                        "phone": "228-160-3516",
                        "status": true
                    }, {
                        "firstname": "Jakie",
                        "lastname": "Albion",
                        "email": "jalbion3@auda.org.au",
                        "phone": "437-271-3760",
                        "status": true
                    }, {
                        "firstname": "Anna-diana",
                        "lastname": "Rowantree",
                        "email": "arowantree4@themeforest.net",
                        "phone": "879-542-4552",
                        "status": false
                    }, {
                        "firstname": "Nellie",
                        "lastname": "Todhunter",
                        "email": "ntodhunter5@amazon.com",
                        "phone": "829-904-1540",
                        "status": true
                    }, {
                        "firstname": "Barbra",
                        "lastname": "Heisham",
                        "email": "bheisham6@symantec.com",
                        "phone": "309-273-1953",
                        "status": false
                    }, {
                        "firstname": "My",
                        "lastname": "Corrao",
                        "email": "mcorrao7@aol.com",
                        "phone": "295-395-7591",
                        "status": false
                    }, {
                        "firstname": "Kip",
                        "lastname": "Skells",
                        "email": "kskells8@mozilla.com",
                        "phone": "541-110-8106",
                        "status": true
                    }, {
                        "firstname": "Adaline",
                        "lastname": "Meins",
                        "email": "ameins9@bloglines.com",
                        "phone": "833-878-4734",
                        "status": true
                    }];
            
            return factory;
            }]);