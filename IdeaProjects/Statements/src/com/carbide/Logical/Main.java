package com.carbide.Logical;

public class Main {

    public static void main(String[] args) {
        // If-else Statement
       /*
        int v1 = 3;
        int v2 = 4;

        if (v1 > v2)
            System.out.println("v1 is bigger than v2");

        else if (v1 < v2)
            System.out.println("v1 is smaller than v2");

        else if (v1 == v2)
            System.out.println("v1 is equal to v2");
        */
        // Block Statement
        int vA = 10, vB = 1, diff;

        if (vA > vB) {
            diff = vA - vB;
            System.out.println("vA is bigger than v2");
            System.out.println(diff);
        }
        else if (vB > vA) {
            diff = vB - vA;
            System.out.println("vB is bigger than vA");
            System.out.println(diff);
        }
        else
            System.out.println("vA and vB are equal");

    }
}
