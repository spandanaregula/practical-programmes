import java.util.function.Function;
public class Ex16_ArrowFunctions { public static void main(String[] args){Function<Integer,Integer> square=n->n*n;System.out.println(square.apply(5));} }
