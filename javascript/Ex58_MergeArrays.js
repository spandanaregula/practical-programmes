import java.util.Arrays;
public class Ex58_MergeArrays { public static void main(String[] args){int[] first={1,2,3},second={4,5,6},merged=new int[first.length+second.length];System.arraycopy(first,0,merged,0,first.length);System.arraycopy(second,0,merged,first.length,second.length);System.out.println(Arrays.toString(merged));} }
