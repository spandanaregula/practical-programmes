import java.util.Arrays;
public class Ex57_RemoveDuplicates { public static void main(String[] args){int[] values={1,2,2,3,1,4};System.out.println(Arrays.toString(Arrays.stream(values).distinct().toArray()));} }
