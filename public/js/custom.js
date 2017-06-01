$(document).ready(function(){
	// Declare global variables
	var currentVal = '';
	var lastVal = '';
	var lastOperator = '';
	const ERROR = 'error';
	
	
	$('.numbers').on('click', function(){
		currentVal += $(this).val();
		$('#result').val(currentVal);
		
		Get_globalValues('after numbers on click');
	});
	
	
	$('.clear').on('click', function(){
		
		switch($(this).val()){
			case "AC":
				ResetCalculator();
				break;
			case "CE":
				currentVal = '';
				$('#result').val('');
				break;
		}
		
		Get_globalValues('after clear on click');
	});
	
	
	// Perform arithmetic operations 
	$('.arithmetic').on('click', function(){
		Get_globalValues('before arithmetic on click');
		
		
		if (currentVal !== ''){
			if (lastOperator.length > 0){ // this is at least the second operation performed
				lastVal = PerformOperation(lastVal, currentVal, lastOperator); // Update lastVal  
				
			} else { // first operation performed
				lastVal = currentVal; // Capture the current value	
			}
			
			currentVal = ''; // Reset currentVal
			lastOperator = $(this).val(); // Capture the operator used
			$('#result').val(''); // Reset the result textbox
		
		} else { // no results have been input yet
			$('#result').val(ERROR);
			ResetCalculator();
		}
		
		Get_globalValues('after arithmetic on click');
	});
	
	
	$('#equal').on('click', function(){
		if (lastVal !== '' && currentVal !== '' && lastOperator !== ''){
			lastVal = PerformOperation(lastVal, currentVal, lastOperator);
			lastOperator = '';
			$('#result').val( lastVal );
			currentVal = lastVal;
			
		} else {
			$('#result').val(ERROR);
			ResetCalculator();
		}
		
		Get_globalValues('after equal on click');
	});
	
	
	function PerformOperation(lastVal, currentVal, operation){
		switch(operation){
			case '+':
				return parseFloat(lastVal) + parseFloat(currentVal);
				break;
			case '-':
				return parseFloat(lastVal) - parseFloat(currentVal);
				break;
			case '*':
				return parseFloat(lastVal) * parseFloat(currentVal);
				break;
			case '/':
				return parseFloat(lastVal) / parseFloat(currentVal);
				break;
			default:
				$('#result').val(ERROR);
				ResetCalculator();
				break;
		}
	};
	
	
	function ResetCalculator(){
		currentVal = '';
		lastVal = '';
		lastOperator = '';
		$('#result').val('');
	};
	
	
	function Get_globalValues(whereFrom){
		console.log('whereFrom = ' + whereFrom + ' currentVal = ' + currentVal + ' lastVal = ' + lastVal + ' lastOperator = ' + lastOperator);
	};
});