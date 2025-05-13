export default function ZingChart() {
  const zingchart = [
    {
      image:
        "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg",
    },
    {
      image:
        "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg",
    },
    {
      image:
        "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg",
    },
  ];

  return (
    <>
      <div className="mt-9">
        <div className="flex items-center gap-x-4 mt-9">
          {zingchart.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                className="rounded-lg hover:scale-105 duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
