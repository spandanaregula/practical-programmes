import java.net.URI;import java.net.http.*;
public class Ex44_DisplayApiData { public static void main(String[] args)throws Exception{var request=HttpRequest.newBuilder(URI.create("https://jsonplaceholder.typicode.com/posts?_limit=5")).build();var response=HttpClient.newHttpClient().send(request,HttpResponse.BodyHandlers.ofString());System.out.println(response.body());} }
