import "../styles/around.css";

import aroundMapBg from "../img/around-map-bg.png";
import aroundPin from "../img/around-pin.svg";
import aroundCluster from "../img/around-cluster.svg";
import aroundBell from "../img/around-bell.svg";
import aroundLocate from "../img/around-locate.svg";
import aroundThumb1 from "../img/around-thumb-1.png";
import aroundThumb2 from "../img/around-thumb-2.png";
import aroundThumb3 from "../img/around-thumb-3.png";

const clusters = [
  { id: 1, value: 23, top: "68px", left: "230px", size: "lg" },
  { id: 2, value: 6, top: "176px", left: "214px", size: "sm" },
  { id: 3, value: 23, top: "210px", left: "292px", size: "lg" },
  { id: 4, value: 2, top: "252px", left: "60px", size: "sm" },
];

const filters = ["모두", "전시중", "무료", "곧 마감", "곧 시작"];

const exhibitions = [
  {
    id: 1,
    title: "머피엄, 엘리 볼라: 위버-마리오네트 Uber-Marionette",
    place: "TINC",
    date: "2025.9.20.(토) - 10.10.(금)",
    tag: "전시중",
    thumb: aroundThumb1,
  },
  {
    id: 2,
    title: "김영재, 루세초, 마루소, 박희민: 감염-종 Species Contaminans",
    place: "챔버",
    date: "2025.9.25.(목) - 10.14.(화)",
    tag: "모두",
    thumb: aroundThumb2,
  },
  {
    id: 3,
    title: "황아일: 슈퍼포지션 Superposition",
    place: "17717",
    date: "2025.9.20.(토) - 10.10.(금)",
    tag: "모두",
    thumb: aroundThumb3,
  },
];

export default function Around() {
  return (
    <section className="around">
      <div className="around__map">
        <img
          className="around__map-bg"
          src={aroundMapBg}
          alt="서울 지도 배경"
        />

        <div className="around__search">전시, 장소를 검색하세요</div>

        <button
          className="around__icon-btn around__icon-btn--bell"
          type="button"
        >
          <img src={aroundBell} alt="알림" />
        </button>

        <button
          className="around__icon-btn around__icon-btn--locate"
          type="button"
        >
          <img src={aroundLocate} alt="내 위치" />
        </button>

        {clusters.map((cluster) => (
          <div
            key={cluster.id}
            className={`around__cluster${
              cluster.size === "sm" ? " around__cluster--sm" : ""
            }`}
            style={{
              top: cluster.top,
              left: cluster.left,
              backgroundImage: `url(${aroundCluster})`,
            }}
          >
            {cluster.value}
          </div>
        ))}

        <img
          className="around__pin"
          src={aroundPin}
          alt="현재 위치"
          style={{ top: "210px", left: "150px" }}
        />
      </div>

      <div className="around__sheet">
        <div className="around__dots">
          <span className="around__dot is-active" />
          <span className="around__dot" />
        </div>

        <div className="around__filters">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`around__chip${index === 0 ? " is-active" : ""}`}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="around__divider" />

        <div className="around__list">
          {exhibitions.map((exhibition) => (
            <article key={exhibition.id} className="around__card">
              <div className="around__thumb">
                <img
                  className="around__thumb-img"
                  src={exhibition.thumb}
                  alt={`${exhibition.title} 포스터`}
                />
              </div>
              <div className="around__card-body">
                <h3 className="around__card-title">{exhibition.title}</h3>
                <p className="around__card-meta">{exhibition.place}</p>
                <p className="around__card-meta">{exhibition.date}</p>
                <span className="around__tag">{exhibition.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
