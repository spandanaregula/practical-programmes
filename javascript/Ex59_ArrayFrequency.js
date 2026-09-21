import java.util.*;
public class Ex59_ArrayFrequency { public static void main(String[] args){int[] values={1,2,1,3,2,1};Map<Integer,Integer> counts=new HashMap<>();for(int value:values)counts.merge(value,1,Integer::sum);System.out.println(counts);} }
