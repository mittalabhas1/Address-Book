function Book($scope){

	$scope.temps = {};

	$scope.createPerson = function(name, contact, hometown) {
		var person = {
			name: name,
			contact: contact,
			hometown: hometown
		};

		return person;
	}

	$scope.addPerson = function(){
		var person = $scope.createPerson($scope.temps.name, $scope.temps.contact, $scope.temps.hometown);
		$scope.addPersonToAddressBook(person);
		$scope.clearInputFields();
	}

	$scope.addPersonToAddressBook = function(person){
		$scope.addressBook.push(person);
	}

	$scope.clearInputFields = function(){
		$scope.temps.name = $scope.temps.contact = $scope.temps.hometown = '';
	}

	$scope.deletePersonAtIndex = function(index){
		$scope.addressBook.splice(index,1);
	}

	$scope.loadAddresses = function(){
		if(localStorage.getItem('people') != 'undefined')
			$scope.addressBook = JSON.parse(localStorage.getItem('people'));
		else
			$scope.addressBook = [];
		console.log($scope.addressBook);
	}

	$scope.saveAddressBook = function(){
		localStorage.setItem('people', JSON.stringify($scope.addressBook));
	}

	$scope.setWatches = function(){
		$scope.$watch('addressBook', function(){
			$scope.saveAddressBook();
		}, true);
	}

	$scope.init = function(){
		$scope.loadAddresses();
		$scope.setWatches();
	}

	$scope.init();

}