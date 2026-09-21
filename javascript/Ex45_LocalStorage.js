import java.util.prefs.Preferences;
public class Ex45_LocalStorage { public static void main(String[] args){Preferences storage=Preferences.userNodeForPackage(Ex45_LocalStorage.class);storage.put("studentName","Asha");System.out.println(storage.get("studentName","No name saved"));} }
