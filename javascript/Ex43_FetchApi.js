import java.net.URI;import java.net.http.*;
public class Ex43_FetchApi { public static void main(String[] args)throws Exception{var request=HttpRequest.newBuilder(URI.create("https://jsonplaceholder.typicode.com/todos/1")).build();var response=HttpClient.newHttpClient().send(request,HttpResponse.BodyHandlers.ofString());System.out.println(response.body());} }
