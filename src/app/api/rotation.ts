const getRotation = async () => {
  const res = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`
  );
  const data = res.json();
  return data;
};
