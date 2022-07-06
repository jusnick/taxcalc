function TaxCalculator(floatMonthlySalary) {
	this.floatMonthlySalary = floatMonthlySalary;
	
	this.getNSSFContribution = function getNSSFContribution() {
	
		if (this.floatMonthlySalary <= 11249.99)
			floatNSSFContribution = 360.00;
		else if (this.floatMonthlySalary >= 11250.00 && this.floatMonthlySalary <= 19749.99)
			floatNSSFContribution = 400.80;
		else if (this.floatMonthlySalary >= 19750.00 && this.floatMonthlySalary <= 29249.99)
			floatNSSFContribution = 400.00;
		else if (this.floatMonthlySalary >= 29250.00 && this.floatMonthlySalary <= 39749.99)
			floatNSSFContribution = 400.20;
		else if (this.floatMonthlySalary >= 39750.00 && this.floatMonthlySalary <= 49249.99)
			floatNSSFContribution = 400.30;
		else if (this.floatMonthlySalary >= 49250.00 && this.floatMonthlySalary <= 59749.99)
			floatNSSFContribution = 400.00;	
		else if (this.floatMonthlySalary >= 59750.00 && this.floatMonthlySalary <= 69249.99)
      floatNSSFContribution = 400;
		else if (this.floatMonthlySalary >= 69250.00 && this.floatMonthlySalary <= 79249.99)
			floatNSSFContribution = 400.20;		
		else if (this.floatMonthlySalary >= 79750.00)
			floatNSSFContribution = 500.30;
		
		return parseFloat(floatNSSFContribution.toFixed(2));
	}
	
	this.getNhifContribution = function getNhifContribution() {
	
		if (this.floatMonthlySalary <= 8999.99)
			floatNhifContribution = 150.00;
		else if (this.floatMonthlySalary >= 9000.00 && this.floatMonthlySalary <= 9999.99 )
			floatNhifContribution = 350.50;		
		else if (this.floatMonthlySalary >= 10000.00 && this.floatMonthlySalary <= 10999.99 )
			floatNhifContribution = 400.00;
		else if (this.floatMonthlySalary >= 11000.00 && this.floatMonthlySalary <= 11999.99 )
			floatNhifContribution = 450.50;		
		else if (this.floatMonthlySalary >= 12000.00 && this.floatMonthlySalary <= 12999.99 )
			floatNhifContribution = 500.00;
		else if (this.floatMonthlySalary >= 13000.00 && this.floatMonthlySalary <= 13999.99 )
			floatNhifContribution = 550.50;		
		else if (this.floatMonthlySalary >= 14000.00 && this.floatMonthlySalary <= 14999.99 )
			floatNhifContribution = 600.00;	
		else if (this.floatMonthlySalary >= 15000.00 && this.floatMonthlySalary <= 15999.99 )
			floatNhifContribution = 620.50;	
		else if (this.floatMonthlySalary >= 16000.00 && this.floatMonthlySalary <= 16999.99 )
			floatNhifContribution = 630.00;
		else if (this.floatMonthlySalary >= 17000.00 && this.floatMonthlySalary <= 17999.99 )
			floatNhifContribution = 640.50;
		else if (this.floatMonthlySalary >= 18000.00 && this.floatMonthlySalary <= 18999.99 )
			floatNhifContribution = 650.00;	
		else if (this.floatMonthlySalary >= 19000.00 && this.floatMonthlySalary <= 19999.99 )
			floatNhifContribution = 660.50;		
		else if (this.floatMonthlySalary >= 20000.00 && this.floatMonthlySalary <= 20999.99 )
			floatNhifContribution = 700.00;
		else if (this.floatMonthlySalary >= 21000.00 && this.floatMonthlySalary <= 21999.99 )
			floatNhifContribution = 710.50;		
		else if (this.floatMonthlySalary >= 22000.00 && this.floatMonthlySalary <= 22999.99 )
			floatNhifContribution = 720.00;	
		else if (this.floatMonthlySalary >= 23000.00 && this.floatMonthlySalary <= 23999.99 )
			floatNhifContribution = 730.50;
		else if (this.floatMonthlySalary >= 24000.00 && this.floatMonthlySalary <= 24999.99 )
			floatNhifContribution = 750.00;	
		else if (this.floatMonthlySalary >= 25000.00 && this.floatMonthlySalary <= 25999.99 )
			floatNhifContribution = 800.50;		
		else if (this.floatMonthlySalary >= 26000.00 && this.floatMonthlySalary <= 26999.99 )
			floatNhifContribution = 810.00;		
		else if (this.floatMonthlySalary >= 27000.00 && this.floatMonthlySalary <= 27999.99 )
			floatNhifContribution = 820.50;		
		else if (this.floatMonthlySalary >= 28000.00 && this.floatMonthlySalary <= 28999.99 )
			floatNhifContribution = 830.00;		
		else if (this.floatMonthlySalary >= 29000.00 && this.floatMonthlySalary <= 29999.99 )
			floatNhifContribution = 850.50;	
		else if (this.floatMonthlySalary >= 30000.00 && this.floatMonthlySalary <= 30999.99 )
			floatNhifContribution = 900.00;		
		else if (this.floatMonthlySalary >= 31000.00 && this.floatMonthlySalary <= 31999.99 )
			floatNhifContribution = 910.50;			
		else if (this.floatMonthlySalary >= 32000.00 && this.floatMonthlySalary <= 32999.99 )
			floatNhifContribution = 920.00;		
		else if (this.floatMonthlySalary >= 33000.00 && this.floatMonthlySalary <= 33999.99 )
			floatNhifContribution = 930.50;
		else if (this.floatMonthlySalary >= 34000.00 && this.floatMonthlySalary <= 34999.99 )
			floatNhifContribution = 940.00;		
		else if (this.floatMonthlySalary >= 35000.00)
			floatNhifContribution = 1700.50;
		
		return parseFloat(floatNhifContribution.toFixed(2));
	}
	
	this.getPagIbigContribution = function getPagIbigContribution() {
		if (this.floatMonthlySalary <= 1500.00)
			floatPagIbigContribution = (0.01 * this.floatMonthlySalary);
		else if (this.floatMonthlySalary > 1500.00 && this.floatMonthlySalary <= 4999.99)
			floatPagIbigContribution = (0.02 * this.floatMonthlySalary);
		else if (this.floatMonthlySalary >= 5000.00)
			floatPagIbigContribution = 100;
			
		return parseFloat(floatPagIbigContribution.toFixed(2));
	}
	
	
	this.getMonthlyTaxableIncome = function getMonthlyTaxableIncome() {
	/*  
		Calculates the monthly taxable income via this equation:
		monthly taxable income = monthly salary - (nhif Health Contribution + nSSf Contribution + Pag Ibig Contribution)
		Reference:http://www.e-pinoyguide.com/2014/07/how-to-compute-your-withholding-tax.html
	*/	
		return (this.floatMonthlySalary - (this.getNSSFContribution() + this.getNhifContribution() + this.getPagIbigContribution())).toFixed(2);
	}
	
	this.getYearlyTaxableIncome = function getYearlyTaxableIncome() {
	/*  
		Calculates the yearly taxable income via this equation:
		yearly taxable income = (monthly salary - (nhif Health Contribution + nssf Contribution + Pag Ibig Contribution)) * 12
		Reference:http://www.e-pinoyguide.com/2014/07/how-to-compute-your-withholding-tax.html
	*/	
		return (this.getMonthlyTaxableIncome() * 12).toFixed(2);
	}
	
	this.getYearlyTaxToPay = function getYearlyTaxToPay() {
	/*  
		Calculates the yearly tax to pay depending on the yearly taxable income.
		Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
	*/	
		floatYearlyTaxableIncome = this.getYearlyTaxableIncome();
		
		if (floatYearlyTaxableIncome <= 10000.00)
			floatYearlyTaxToPay = (0.05 * floatYearlyTaxableIncome);
		else if (floatYearlyTaxableIncome > 10000.00 && floatYearlyTaxableIncome <= 30000.00)
			floatYearlyTaxToPay = 500 + (0.10 * (floatYearlyTaxableIncome - 10000.00))
		else if (floatYearlyTaxableIncome > 30000.00 && floatYearlyTaxableIncome <= 70000.00)
			floatYearlyTaxToPay =  2500 + (0.15 * (floatYearlyTaxableIncome - 30000.00));
		else if (floatYearlyTaxableIncome > 70000.00 && floatYearlyTaxableIncome <= 140000.00)
			floatYearlyTaxToPay = 8500 + (0.20 * (floatYearlyTaxableIncome - 70000.00));
		else if (floatYearlyTaxableIncome > 140000.00 && floatYearlyTaxableIncome <= 250000.00)
			floatYearlyTaxToPay = 22500 + (0.25 * (floatYearlyTaxableIncome - 140000.00));
		else if (floatYearlyTaxableIncome > 250000.00 && floatYearlyTaxableIncome <= 500000.00)
			floatYearlyTaxToPay = 50000 + (0.30 * (floatYearlyTaxableIncome - 250000.00));
		else if (floatYearlyTaxableIncome > 500000.00)
			floatYearlyTaxToPay = 125000 + (0.32 * (floatYearlyTaxableIncome - 500000.00));
		
		return floatYearlyTaxToPay.toFixed(2);
	}
	
	this.getMonthlyTaxToPay = function getMonthlyTaxToPay() {
	/*  
		Calculates the yearly tax to pay depending on the yearly taxable income.
		Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
	*/	
		return parseFloat((this.getYearlyTaxToPay() / 12).toFixed(2));
	}
	
	this.getTaxBracket = function getTaxBracket() {
	/*  
		Returns the tax bracket depending on the yearly tax income.
		Reference:http://www.businessforum.ph/threads/600-Income-Tax-Rate-Table-for-Individual-Taxpayers-in-the-Philippines
	*/	
		floatYearlyTaxableIncome = this.getYearlyTaxableIncome();
		
		if (floatYearlyTaxableIncome <= 10000.00)
			strTaxBracket = "10,000.00 and below";
		else if (floatYearlyTaxableIncome > 10000.00 && floatYearlyTaxableIncome <= 30000.00)
			strTaxBracket = "(10,001.00 - 30,000.00)";
		else if (floatYearlyTaxableIncome > 30000.00 && floatYearlyTaxableIncome <= 70000.00)
			strTaxBracket = "(30,001.00 - 70,000.00)";
		else if (floatYearlyTaxableIncome > 70000.00 && floatYearlyTaxableIncome <= 140000.00)
			strTaxBracket = "(70,001.00 - 140,000.00)";
		else if (floatYearlyTaxableIncome > 140000.00 && floatYearlyTaxableIncome <= 250000.00)
			strTaxBracket = "(140,001.00 - 250,000.00)";
		else if (floatYearlyTaxableIncome > 250000.00 && floatYearlyTaxableIncome <= 500000.00)
			strTaxBracket = "(250,001.00 - 500,000.00)";
		else if (floatYearlyTaxableIncome > 500000.00)
			strTaxBracket = "(500,000.00 and above)";
		
		return strTaxBracket;
	}
	
	this.getNetPay = function getNetPay() {
	/*
		Calculates the net pay through this equation: 
		net pay = monthly salary - (NhifHealth Contribution + SSS Contribution + Pag Ibig Contribution + Monthly Tax to Pay)
	*/
		return (this.floatMonthlySalary - (this.getNSSFContribution() + this.getNhifContribution() + this.getPagIbigContribution() + this.getMonthlyTaxToPay())).toFixed(2);
	}
	
	this.displayResults = function displayResults() {
	/*
		Displays the following: 
			NSSF Contribution
			NhifHealth Contribution
			Monthly Taxable Income
			Yearly Taxable Income
			Tax Bracket
			Yearly Tax to Pay
			Monthly Tax to Pay
			Net Pay
	*/
	
		strDisplayResult = "NSSF Contribution: Ksh" + this.getNSSFContribution() + "<br>";
		strDisplayResult += "NhifHealth Contribution: Ksh" + this.getNhifContribution() + "<br>";
		strDisplayResult += "SAVINGS: Ksh" + this.getPagIbigContribution() + "<br>";
		strDisplayResult += "Monthly Taxable Income: Ksh" + this.getMonthlyTaxableIncome() + "<br>";
		strDisplayResult += "Yearly Taxable Income: Ksh" + this.getYearlyTaxableIncome() + "<br>";
		strDisplayResult += "Tax Bracket: " + this.getTaxBracket() + "<br>";
		strDisplayResult += "Yearly Tax To Pay: " + this.getYearlyTaxToPay() + "<br>";
		strDisplayResult += "Monthly Tax To Pay: Ksh" + this.getMonthlyTaxToPay() + "<br>";
		strDisplayResult += "Net Pay: Ksh" + this.getNetPay();
		
		return strDisplayResult;
	}
}
