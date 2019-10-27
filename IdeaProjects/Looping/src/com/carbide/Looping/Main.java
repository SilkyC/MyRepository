package com.carbide.Looping;

public class Main {

    public static void main(String[] args) {

    //While Loop - Repeatedly execute a statement as long as condition is true
/*
	int kVal = 5;
	int factorial = 1;

	//With Block statement
	//        while(kVal > 1) {
       //     factorial *= kVal;
       //     kVal -= 1;
    //}
            while(kVal > 1)
            factorial *= kVal--;

	    System.out.println(factorial);
*/
/*
	//Do-While Loop - Condition is Checked at end of the Loop
        int iVal =5;
        do {
            System.out.print(iVal);
            System.out.print(" *2 = ");
            iVal *= 2;
            System.out.println(iVal);
        }   while (iVal < 100);
*/
        //For-Loop - Condition checked at Loop start
            /*
            int nVal = 1;
            while(nVal < 100) {
                System.out.println(nVal);
                nVal *= 2;
             }
             */

            for (int nVal = 1; nVal < 100; nVal *= 2)
                System.out.println(nVal);

    }
}
