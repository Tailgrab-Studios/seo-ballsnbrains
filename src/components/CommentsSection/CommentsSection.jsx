import React from 'react';

// Imports dos avatares sequenciais
import p1 from '../../assets/testimonials/person-1-comment.webp';
import p2 from '../../assets/testimonials/person-2-comment.webp';
import p3 from '../../assets/testimonials/person-3-comment.webp';
import p4 from '../../assets/testimonials/person-4-comment.webp';
import p5 from '../../assets/testimonials/person-5-comment.webp';
import p6 from '../../assets/testimonials/person-6-comment.webp';
import p7 from '../../assets/testimonials/person-7-comment.webp';
import p8 from '../../assets/testimonials/person-8-comment.webp';
import p9 from '../../assets/testimonials/person-9-comment.webp';
import p10 from '../../assets/testimonials/person-10-comment.webp';
import p11 from '../../assets/testimonials/person-11-comment.webp';
import p12 from '../../assets/testimonials/person-12-comment.webp';
import p13 from '../../assets/testimonials/person-13-comment.webp';
import p14 from '../../assets/testimonials/person-14-comment.webp';
import p15 from '../../assets/testimonials/person-15-comment.webp';
import p16 from '../../assets/testimonials/person-16-comment.webp';
import p17 from '../../assets/testimonials/person-17-comment.webp';

// Provas Sociais (Imagens dentro dos comentários)
import billResult from '../../assets/images/image-1-comments.webp';
import deonResult from '../../assets/images/image-2-comments.webp';

const Comment = ({ name, text, time, likes, avatar, children, proofImage }) => (
  <div className="flex gap-3 py-4 border-b border-gray-100 last:border-0">
    <img
      src={avatar}
      alt={name}
      className="w-10 h-10 object-cover flex-shrink-0"
    />
    <div className="flex-1 text-[13px] md:text-[14px]">
      <h4 className="font-bold text-[#3b5998] hover:underline cursor-pointer">
        {name}
      </h4>
      <p className="text-gray-800 my-1 leading-snug">{text}</p>

      {/* Renderiza a imagem de prova social se ela for passada via props */}
      {proofImage && (
        <img
          src={proofImage}
          alt="User result proof"
          className="mt-3 w-48 md:w-64 h-auto rounded-sm shadow-sm border border-gray-200"
        />
      )}

      <div className="flex items-center gap-3 text-[11px] font-semibold text-[#3b5998] mt-2">
        <button className="hover:underline">Like</button>
        <span className="text-gray-300">·</span>
        <button className="hover:underline">Reply</button>
        <span className="text-gray-300">·</span>
        <div className="flex items-center gap-1">
          <span className="bg-[#3b5998] text-white p-0.5 rounded-full text-[8px]">
            👍
          </span>
          <span className="text-gray-500 font-normal">{likes}</span>
        </div>
        <span className="text-gray-300">·</span>
        <span className="text-gray-400 font-normal">{time}</span>
      </div>

      {children && (
        <div className="mt-4 border-l-2 border-gray-100 pl-4">{children}</div>
      )}
    </div>
  </div>
);

export default function CommentsSection() {
  return (
    <section className="mt-16 ">
      <h3 className="text-xl font-black text-gray-900 border-b-2 border-gray-100 pb-4 mb-6 uppercase tracking-tight">
        Comments
      </h3>

      <div className="space-y-1">
        <Comment
          name="Beth George"
          avatar={p1}
          time="51 min"
          likes="4"
          text="If this truly brings his energy back, sign me up! I miss the 'old him' in the mornings, if you know what I mean... 😉"
        />

        <Comment
          name="Bill Wilson"
          avatar={billResult}
          time="1 h"
          likes="6"
          text="Taking 10 different pills every morning was a nightmare. This coffee is a lifesaver. I feel 20 years younger and my stamina is through the roof."
          proofImage={billResult}
        />

        <Comment
          name="Chris Dougley"
          avatar={p3}
          time="2 h"
          likes="2"
          text="Ugh, pill organizers are the worst! I hated swallowing handfuls of vitamins with the fiery passion of a thousand hells. If this truly replaces my stack, I'm sold!"
        >
          <Comment
            name="Josie Martinez"
            avatar={p4}
            time="1 h"
            likes="3"
            text="I hear you! My husband hated the pills too. Balls & Brains has been a game-changer. He drinks one cup and... well, let's just say our mornings are much more 'active' now. Best investment ever."
          />
        </Comment>

        <Comment
          name="Ledger Barnett"
          avatar={p5}
          time="3 h"
          likes="1"
          text="I hate spending $600 a month on different supplements... I really want to try this but I hope it actually tastes good, I can't drink dirt water just to save money."
        />

        <Comment
          name="David Pringle"
          avatar={p6}
          time="3 h"
          likes="1"
          text="This Mushroom stuff sounds promising for focus and T-levels, but I'd love to hear from people who've actually tried it. Does it taste like actual coffee?"
        />

        <Comment
          name="Winona Vee"
          avatar={p7}
          time="2 h"
          likes="3"
          text="I've tried it and it's delicious! Tastes just like a premium roast, no earthy mushroom taste at all. Plus, my husband's energy is cleaner than with energy drinks. Highly recommend giving it a try!"
        />

        <Comment
          name="Cecelia Vanderwood"
          avatar={p8}
          time="3 h"
          likes="8"
          text="Taste is key! Hoping B&B Coffee fits into my husband's morning routine easily."
        />

        <Comment
          name="Lucille Langley"
          avatar={p9}
          time="4 h"
          likes="1"
          text="Anyone else worried about the jitters? Don't want him crashing in the afternoon when he gets home."
        >
          {' '}
          <Comment
            name="Tyler Drum"
            avatar={p10}
            time="2 h"
            likes="2"
            text="I was worried too, but the energy is super smooth. No jitters, no crash. Just solid focus and drive all day long."
          />
          <Comment
            name="Xenia Bordeau"
            avatar={p11}
            time="1 h"
            likes="2"
            text="No need to worry! It’s a very balanced boost. The quality is so good, and my husband is in a MUCH better mood when he comes home now."
          />
        </Comment>

        <Comment
          name="Daphne Reynolds"
          avatar={p12}
          time="4 h"
          likes="3"
          text="This coffee has been life-changing for us. My husband has been waking up... very 'happy' and ready to go within the first 3 days of drinking it 😉"
        />

        <Comment
          name="William Hewitt"
          avatar={p13}
          time="4 h"
          likes="3"
          text="I never thought I'd give up my regular brew, but B&B proved me wrong! Full clinical doses in one cup? My wife is certainly happier with the results."
        />

        <Comment
          name="Faith McCain"
          avatar={p14}
          time="5 h"
          likes="3"
          text="I thought it was too good to be true, but reading about the ingredients convinced me. Ordering a bag for my partner today!"
        />

        <Comment
          name="Nina Stobo"
          avatar={p15}
          time="5 h"
          likes="2"
          text="Thinking about trying Balls & Brains but have questions? Does it really help with drive? Fire away!"
        >
          <Comment
            name="Gwenyth McPherson"
            avatar={p16}
            time="2 h"
            likes="5"
            text="Have bought this for my hubby for 2 months now and it's been amazing! It works so well for his focus and... performance. Customer service was also very helpful. Highly recommend!"
          />{' '}
        </Comment>

        <Comment
          name="Deon Andrews"
          avatar={deonResult}
          time="5 h"
          likes="3"
          text="Thank you, mine arrived today. Smells great, time to brew!"
          proofImage={deonResult}
        />
      </div>
    </section>
  );
}
