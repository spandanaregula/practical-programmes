public class Ex49_Gcd { static int gcd(int a,int b){while(b!=0){int remainder=a%b;a=b;b=remainder;}return Math.abs(a);} public static void main(String[] args){System.out.println(gcd(48,18));} }
