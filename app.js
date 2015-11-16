angular.module("myApp", [])
.controller("myAppCtrl", function ($scope) {
  $scope.continent = [
    'Asia',
    'America'
  ];
  $scope.asia = [
    "AZERBAIJAN","JAPAN","QATAR","ARMENIA","JORDAN","SAUDI ARABIA","BAHRAIN","KAZAKHSTAN","SINGAPORE","BANGLADESH","KUWAIT","SOUTH KOREA","BHUTAN","KYRGYZSTAN","SRI LANKA","BRUNEI","LAOS","SYRIA",
    "BURMA","LEBANON","TAIWAN","CAMBODIA","MALAYSIA","TAJIKISTAN","CHINA","MALDIVES","THAILAND","EAST TIMOR","MONGOLIA","TURKEY",
    "INDIA","NEPAL","TURKMENISTAN","INDONESIA","NORTH KOREA","UNITED ARAB EMIRATES","IRAN","OMAN","UZBEKISTAN","IRAQ","PAKISTAN","VIETNAM",
    "ISRAEL","PHILIPPINES","YEMEN"
  ];
  $scope.america = [
    "Antigua and Barbuda","Bahamas","Barbados","Belize","Canada",
    "Costa Rica","Cuba","Dominica","Dominican Republic","El Salvador",
    "Grenada","Guatemala","Haiti","Honduras","Jamaica","Mexico","Nicaragua",
    "Panama","St. Kitts and Nevis","St. Lucia","St. Vincent and The Grenadines",
    "Trinidad and Tobago","USA (United States of America)"
  ];

  $scope.chooseData = function (continent) {
    if(continent === 'Asia') return $scope.asia;
    else if(continent === 'America') return $scope.america;
    else return []
  }
})
