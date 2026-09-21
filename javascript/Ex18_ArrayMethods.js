import java.util.Arrays;
public class Ex18_ArrayMethods { public static void main(String[] args){int[] values={1,2,3,4};int[] doubled=Arrays.stream(values).map(n->n*2).toArray();System.out.println(Arrays.toString(doubled));System.out.println(Arrays.stream(values).filter(n->n%2==0).sum());} }
