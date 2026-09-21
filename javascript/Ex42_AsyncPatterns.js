import java.util.concurrent.CompletableFuture;
public class Ex42_AsyncPatterns { public static void main(String[] args){CompletableFuture.supplyAsync(()->"Promise complete").thenAccept(System.out::println);System.out.println("Callback complete");try{Thread.sleep(200);}catch(InterruptedException exception){Thread.currentThread().interrupt();}} }
