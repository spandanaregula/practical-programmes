import java.util.Scanner;
public class Ex28_Calculator { public static void main(String[] args){try(Scanner input=new Scanner(System.in)){double a=input.nextDouble();char op=input.next().charAt(0);double b=input.nextDouble();double result=switch(op){case '+'->a+b;case '-'->a-b;case '*'->a*b;case '/'->a/b;default->Double.NaN;};System.out.println(result);}} }
