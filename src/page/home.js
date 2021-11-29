import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  faHome,
  faUserFriends,
  faFlag,
  faTv,
  faUserCircle,
  faEllipsisH,
} from "@fortawesome/fontawesome-free-solid";

//menu
var Obj = {
  Menu() {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: 100000,
          backgroundColor: "white",
          height: 70,
          boxShadow: "0 0 10px 4px #E6E6E6",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "fixed",
          width: "100%",
        }}
      >
        <div
          className="khung"
          style={{
            width: "25%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img
            style={{ width: 50 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          />
          <input
            className="input"
            type="text"
            placeholder="     Tìm kiếm bạn bè trên Facebook"
            style={{
              height: 40,
              width: 300,
              borderRadius: "50px",
              borderStyle: "none",
              backgroundColor: "#E6E6E6",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-around",
            width: 500,
          }}
        >
          <FontAwesomeIcon
            icon={faHome}
            style={{ color: "gray", fontSize: 25 }}
          />
          <FontAwesomeIcon
            icon={faUserFriends}
            style={{ color: "gray", fontSize: 25 }}
          />
          <FontAwesomeIcon
            icon={faFlag}
            style={{ color: "gray", fontSize: 25 }}
          />
          <FontAwesomeIcon
            icon={faTv}
            style={{ color: "gray", fontSize: 25 }}
          />
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{ color: "gray", fontSize: 25 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
            width: 350,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifyContent: "space-around",
              width: 140,
              height: 50,
              borderRadius: "50px",
              backgroundColor: "#CEECF5",
            }}
          >
            <img
              style={{ width: 40, height: 40, borderRadius: "100%" }}
              className="anh"
              src="https://afamilycdn.com/150157425591193600/2020/7/7/shiba-cheems-meme-dog-balltze-4-1-1594089369474789804369.jpg"
            />
            <h3 style={{ color: "#1E90FF" }}>Trongkhoi</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: 200,
              justifyContent: "space-between",
            }}
          >
            <i
              class="fa fa-bars"
              style={{
                width: 40,
                height: 40,
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                backgroundColor: "#E6E6E6",
              }}
            ></i>
            <i
              class="fa fa-comment-dots"
              style={{
                width: 40,
                height: 40,
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                backgroundColor: "#E6E6E6",
              }}
            ></i>
            <i
              class="fa fa-bell"
              style={{
                width: 40,
                height: 40,
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                backgroundColor: "#E6E6E6",
              }}
            ></i>
            <i
              class="fa fa-angle-down"
              style={{
                width: 40,
                height: 40,
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                backgroundColor: "#E6E6E6",
              }}
            ></i>
          </div>
        </div>
      </div>
    );
  },
  Anhbia() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            height: 400,
            backgroundColor: "#F2F2F2",
            width: "70%",
            display: "flex",
            alignItems: "end",
            flexDirection: "row-reverse",
          }}
        >
          <button
            style={{
              fontFamily: "Karla, sans-serif;",
              backgroundColor: "white",
              borderStyle: "none",
              width: 120,
              height: 40,
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              marginRight: 20,
              marginBottom: 20,
              borderRadius: "5px",
              fontSize: 14,
            }}
          >
            <i class="fa fa-camera"></i>
            Thêm ảnh bìa
          </button>
        </div>
      </div>
    );
  },
  Anhdaidien() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="khungto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 600,
            justifyContent: "space-between",
          }}
        >
          <img
            className="khung1"
            src="https://afamilycdn.com/150157425591193600/2020/7/7/shiba-cheems-meme-dog-balltze-4-1-1594089369474789804369.jpg"
            style={{
              width: 180,
              height: 180,
              borderRadius: "100%",
              position: "absolute",
              marginLeft: -40,
            }}
          />
          <div className="khung2" style={{ marginLeft: 150 }}>
            <h1>Trongkhoi</h1>
            <h3 style={{ color: "gray" }}>551 Bạn bè</h3>
          </div>
        </div>
        <div
          className="cacnut"
          style={{
            display: "flex",
            alignItems: "end",
            width: 290,
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              borderRadius: "5px",
              height: 40,
              backgroundColor: "#2E64FE",
              color: "white",
              borderStyle: "none",
            }}
          >
            <i class="fa fa-plus"></i>Thêm vào tin
          </button>
          <button
            style={{
              borderRadius: "5px",
              height: 40,
              backgroundColor: "#2E64FE",
              color: "white",
              borderStyle: "none",
            }}
          >
            <i class="fa fa-pen"></i>Chỉnh sửa trang cá nhân
          </button>
        </div>
      </div>
    );
  },
  Mucchon() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <hr
          style={{
            width: "65%",
            backgroundColor: "#E6E6E6",
            borderColor: "white",
            height: "0px",
          }}
        ></hr>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 700,
              color: "gray",
            }}
          >
            <h3
              style={{
                height: 40,
                width: 80,
                color: "#2E64FE",
                textAlign: "center",
                borderColor: "white",
                borderBottomColor: "#2E64FE",
                borderStyle: "solid",
              }}
            >
              Bài viết
            </h3>
            <h3 style={{ marginTop: 22 }}>Giới thiệu</h3>
            <h3 style={{ marginTop: 22 }}>Bạn bè</h3>
            <h3 style={{ marginTop: 22 }}>Ảnh</h3>
            <h3 style={{ marginTop: 22 }}>Kho lưu trữ tin</h3>
            <h3 style={{ marginTop: 22 }}>Video</h3>
            <h3 style={{ marginTop: 22 }}>
              Xem thêm <i class="fa fa-angle-down"></i>
            </h3>
          </div>

          <button
            style={{
              height: 40,
              borderRadius: 5,
              width: 50,
              borderStyle: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E6E6E6",
            }}
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>
    );
  },
};
function Home() {
  return (
    <React.Fragment>
      <Obj.Menu />
      <Obj.Anhbia />
      <Obj.Anhdaidien />
      <br />
      <br />
      <br />
      <Obj.Mucchon />
    </React.Fragment>
  );
}
export default Home;
