import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
public class Ex27_DigitalClock { public static void main(String[] args){System.out.println(LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")));} }
