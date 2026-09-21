import java.util.Arrays;
public class Ex39_SpreadRest { static int total(int... numbers){return Arrays.stream(numbers).sum();} public static void main(String[] args){int[] values={1,2,3,4};System.out.println(Arrays.toString(values));System.out.println(total(values));} }
