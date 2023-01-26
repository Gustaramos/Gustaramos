import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.List;
import java.util.Map;

public class App {
    public static void main(String[] args) throws Exception {
        
        // fazer uma conexão HTTP (protocolo usado para se comunicar via web - request e response) e buscar os top 250 filmes .
        String url = "https://mocki.io/v1/9a7c1ca9-29b4-4eb3-8306-1adb9d159060"; //top250
        String url2 = "https://api.mocki.io/v2/549a5d8b"; //top 10
        URI enderco = URI.create(url2);
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(enderco).GET().build();
        client.sendAsync(request, BodyHandlers.ofString());
        HttpResponse<String>response = client.send(request, BodyHandlers.ofString());
        String body = response.body();

        /* extrair os dados de interesse:
        - Titulo
        - Poster
        - Classificação
        */  
        JsonParser parser = new JsonParser();
        List<Map<String, String>> listaDeFilmes = parser.parse(body);
        
        // exibir e manipular os dados extraidos.
        for (Map<String,String> filme : listaDeFilmes) {
            System.out.println(filme.get("title"));
            System.out.println(filme.get("image"));
            System.out.println(filme.get("imDbRating"));
            System.out.println();
        }

    }
}
