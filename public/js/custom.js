$(document).ready(function(){
	// Declare global variables
	var currentVal = '';
	const ERROR = 'error';
	var lastVal;
	
	$('.numbers').on('click', function(){
		currentVal += $(this).val();
		lastVal += $(this).val();
		$('#result').val(currentVal);
	});
	
	
	$('.clear').on('click', function(){
		var temp = '';
		
		switch($(this).val()){
			case "AC":
				ResetCalculator();
				break;
			case "CE":
				// remove lastVal from currentVal
				for (var i = 0; i < currentVal.length - lastVal.length; i++){
					temp += currentVal[i];
				}
				
				currentVal = temp;
				$('#result').val(currentVal);
				break;
		}
	});
	
	 
	$('.arithmetic').on('click', function(){
		currentVal += $(this).val();
		lastVal = $(this).val();
		$('#result').val(currentVal);
	});
	
	
	$('#equal').on('click', function(){
		if ($.isNumeric(eval(currentVal))){
			$('#result').val(eval(currentVal));
		} else {
			$('#result').val(ERROR);
		}
	});
	
	
	function ResetCalculator(){
		currentVal = '';
		$('#result').val('');
	};

});