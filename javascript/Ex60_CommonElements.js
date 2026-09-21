import java.util.*;
public class Ex60_CommonElements { public static void main(String[] args){Set<Integer> first=new HashSet<>(Arrays.asList(1,2,3,4));Set<Integer> second=new HashSet<>(Arrays.asList(3,4,5,6));first.retainAll(second);System.out.println(first);} }
