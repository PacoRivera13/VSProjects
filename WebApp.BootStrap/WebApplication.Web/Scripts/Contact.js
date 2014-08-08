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

    self.createProfile = function () {
        alert("Crear un nuevo cliente");
    };

    self.editProfile = function (profile) {
        alert("Editar al cliente:" + profile.ProfileId);
    };

    self.removeProfile = function (profile) {
        if (confirm("Seguro de eliminar?")) {
            self.Profiles.remove(profile);
        }
    };
};
ko.applyBindings(new ProfilesViewModel());

