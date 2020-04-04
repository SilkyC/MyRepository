package com.carbide.Arithmetic;

public class Main {

    public static void main(String[] args) {
/*
    	// Primitive types - Store by value
    	int firstValue = 100;

		int otherValue = firstValue;

		//firstValue = 50;

	System.out.println(firstValue);
*/

//Arithmetic Operators
		//Using math operator Prefix/POstFix changes memory stored value
	/*
		int myVal = 5;
		System.out.println(++myVal);
		System.out.println(myVal);

	//Case2
		int myVal = 5;
		System.out.println(myVal++);
		System.out.println(myVal);
	*/

//Compound Assignment Operators
	/*
		int myVal = 50;
		myVal -= 5;
		System.out.println(myVal);

	//value input plus operation
		int result = 50;
		int val1 = 5;
		int val2 = 2;
		result /=val1 * val2;
		System.out.println(result);
	*/

	/*
//Operator Precedence
		int valA = 50;
		int valB = 5;
		int valC = 2;
		int valD = 1;

		System.out.println(valA - valB / valC);
		System.out.println((valA - valB) / valC);

		System.out.println(valA / valC * valD + valB);
		System.out.println((valA / valC) * (valD + valB));

	*/

	/*

	//Type Conversion
		float fVal = 1.0f;
		double dVal = 4.0d;
		byte bVal = 7;
		short sVal = 7;
		long lVal = 5;

		short result1 = bVal;
		short result2 = (short) lVal;
		short result3 = (short) (bVal - lVal);
		double result4 = lVal - dVal;
		long result5 = (long) (sVal - lVal + fVal + dVal);

		System.out.println("Success");
*/
	//Conditional Assignment
        /*
        int v1 = 7;
        int v2 = 15;
        int vMax = v1 > v2? v1 : v2;
        System.out.println(vMax);
*/
        float students = 30;
        float dormitories = 5;
        float studentsPerDorm = dormitories == 0.0f ? 0.0f : students/dormitories;
        System.out.println(studentsPerDorm);
    }
}
