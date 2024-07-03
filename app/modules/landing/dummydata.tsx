import Image from "next/image";

export const news = [
  {
    title: "Summer Update 2024",
    timestamp: 1719948026,
    type: "DEV",
    content: (
      <>
        <div className="flex">
          <div className="w-[90%]">
            <p>
              once again, the summer update has landed, and we dare you to dive
              into the new adventures waiting for you
            </p>
            <p className="mt-3">
              Believe it or not, Sweet Dreams will take you to a magical place
              in Tibia flowing with milk and honey. In this dreamlike area
              called Candia, they throw a carnival so marvellous, it will make
              your head spin and your sweet tooth tingle with delight. The
              catch? The carnival only opens when every Candian is back to their
              carefree, sugary selves. Do you have what it takes to restore
              peace in paradise?
            </p>
          </div>
          <Image
            className="object-cover"
            src={"/update-tree-summer-135.png"}
            width={135}
            height={135}
            alt="test"
          />
        </div>
        <p>
          Meanwhile, in a darker place, Dr. Marrow has returned, and he has
          unleashed the Rise of Podzilla - a colossal creature that poses a dire
          threat to the mainland. This quest presents players with a plethora of
          rewarding hunting grounds, cunning challenges, and a repeatable boss
          fight against Dr. Marrow's most menacing creation to date. Time to
          send those plants to the compost heap!
        </p>
      </>
    ),
  },
  {
    title: "Rapid Respawn and Double Skill Weekend",
    timestamp: 1719948026,
    type: "COM",
    content: (
      <>
        <div className="flex">
          <div className="w-[90%]">
            <p>
              Sharpen your swords and ready your spells, for hordes of monsters
              are incoming! Another Rapid Respawn Weekend will soon be upon us!
              This time in combination with the double skill feature! Do not
              forget to donate enough gold for your favourite hunting ground to
              take full advantage of the event! Between the server saves of June
              07 and June 10, all monsters will respawn five times faster. Areas
              with an active improved respawn area bonus yield an even faster
              respawn time. Furthermore, your skill training, including magic
              level, will advance twice as fast. The skill progress when
              training offline will also be doubled. Save the date! Happy
              fighting! Your Community Managers
            </p>
          </div>
          <Image
            className="object-cover"
            src={"/rapid-respawn.png"}
            width={250}
            height={219}
            alt="test"
          />
        </div>
      </>
    ),
  },
  {
    title: "Rapid Respawn and Double Skill Weekend",
    timestamp: 1719948026,
    type: "COM",
    content: (
      <>
        <div className="flex">
          <div className="w-[90%]">
            <p>
              Sharpen your swords and ready your spells, for hordes of monsters
              are incoming! Another Rapid Respawn Weekend will soon be upon us!
              This time in combination with the double skill feature! Do not
              forget to donate enough gold for your favourite hunting ground to
              take full advantage of the event! Between the server saves of June
              07 and June 10, all monsters will respawn five times faster. Areas
              with an active improved respawn area bonus yield an even faster
              respawn time. Furthermore, your skill training, including magic
              level, will advance twice as fast. The skill progress when
              training offline will also be doubled. Save the date! Happy
              fighting! Your Community Managers
            </p>
          </div>
          <Image
            className="object-cover"
            src={"/rapid-respawn.png"}
            width={250}
            height={219}
            alt="test"
          />
        </div>
      </>
    ),
  },
];
