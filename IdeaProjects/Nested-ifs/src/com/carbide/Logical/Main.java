package com.carbide.Logical;

public class Main {

    public static void main(String[] args) {
	    /*
        float students = 0.0f;
	    float rooms = 4.0f;

        if (students > 0.0f) {
            if (rooms > 0.0f)
                System.out.println(students / rooms);
        }
        else
            System.out.println("No Students");

	    System.out.println();
        System.out.println("** end program **");
        */

	    //Variables declared inside the block are not visible outside scope of block
        float students = 30;
        float rooms = 20;

        if (rooms > 0.0) {
           System.out.println(students);
            System.out.println(rooms);
            float avg = (students / rooms);
            System.out.println(avg);
        }

    }
}
