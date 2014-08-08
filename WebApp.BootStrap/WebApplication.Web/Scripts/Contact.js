var DummyProfile = [
    {
        "ProfileId": 1,
        "FirstName": "Anna",
        "LastName": "Pandey",
        "Email": "anand@anandpandey.com"
    },
    {
        "ProfileId": 2,
        "FirstName": "John",
        "LastName": "Cena",
        "Email": "john@cena.com"
    },
    {
        "ProfileId": 3,
        "FirstName": "Pako",
        "LastName": "Rivera",
        "Email": "rivera@mail.com"
    }
]

var ProfilesViewModel = function () {
    var self = this;
    var refresh = function () {
        self.Profiles(DummyProfile);
    };

    // Public data properties
    self.Profiles = ko.observableArray([]);
    refresh();
};
ko.applyBindings(new ProfilesViewModel());