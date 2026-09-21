import java.util.regex.*;
public class Ex66_RegularExpressions { public static void main(String[] args){String text="Order 42 ships on 2026-09-20.";Matcher matcher=Pattern.compile("\\d+").matcher(text);while(matcher.find())System.out.println(matcher.group());System.out.println(Pattern.compile("java",Pattern.CASE_INSENSITIVE).matcher("Learn Java").find());} }
