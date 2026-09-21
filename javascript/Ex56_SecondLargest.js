import java.util.Arrays;
public class Ex56_SecondLargest { public static void main(String[] args){int[] values={12,5,18,18,9,14};Arrays.sort(values);int largest=values[values.length-1];for(int i=values.length-2;i>=0;i--)if(values[i]!=largest){System.out.println(values[i]);break;}} }
