import { TwitterApi } from 'twitter-api-v2';

// Reemplaza con tus credenciales
const client = new TwitterApi({
  appKey: '581ujyi1H7oqVFk9yG4pfM30a', // Reemplaza con tu App Key
  appSecret: 'PixcqaWBJKMR67u3r9I3NSfI3ZJPAjes7Ih65ddHEHP9BAZQde', // Reemplaza con tu App Secret
  accessToken: '1906078452-mIe8uiHdVH19JNJq4ELkP0rBBWBi7ihDLBfWlqD', // Reemplaza con tu Access Token
  accessSecret: '2Eo3fa6HLoqcJLSbtZtH7ztkSw5W56ZvkLR6zDF6u6pKO', // Reemplaza con tu Access Token Secret
});

// Aquí inicia el proceso para borrar tweets
async function deleteAllTweets() {
  try {
    const user = await client.v2.me();
    const id = user.data.id

    // Obtiene los tweets del usuario
    const tweets = await client.v2.userTimeline(id, { max_results: 100 });

    for (const tweet of tweets.data) {
      await client.v2.tweetDelete(tweet.id);
      console.log(`Tweet eliminado: ${tweet.id}`);
    }
  } catch (error) {
    console.error('Error al eliminar tweets:', error);
  }
}

// Llama a la función para eliminar tweets
deleteAllTweets();
