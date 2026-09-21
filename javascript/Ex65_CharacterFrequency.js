import java.util.*;
public class Ex65_CharacterFrequency { public static void main(String[] args){String text="banana";Map<Character,Integer> counts=new HashMap<>();for(char character:text.toCharArray())counts.merge(character,1,Integer::sum);System.out.println(counts);} }
