public class Ex10_ReverseNumber { public static void main(String[] args){int number=12345,reversed=0;while(number!=0){reversed=reversed*10+number%10;number/=10;}System.out.println(reversed);} }
