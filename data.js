var APP_DATA = {
  "scenes": [
    {
      "id": "0-gorgons-gaze-entry",
      "name": "Gorgons Gaze Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.138142081821192,
        "pitch": 0.11472193370895134,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -2.998783423736471,
          "pitch": 0.5537605466638027,
          "rotation": 0,
          "target": "1-hotspot-1"
        },
        {
          "yaw": -2.8956264201367254,
          "pitch": 0.1553244022033251,
          "rotation": 0,
          "target": "2-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.0508074887416825,
        "pitch": 0.2564495893212815,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -2.697366479950489,
          "pitch": 0.4191564965150967,
          "rotation": 0,
          "target": "2-hotspot-2"
        },
        {
          "yaw": 0.17146887552005552,
          "pitch": 0.19236322162420372,
          "rotation": 0,
          "target": "0-gorgons-gaze-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.1150186033181484,
        "pitch": 0.16046583304192907,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 0.14232830410538355,
          "pitch": 0.4322731613696824,
          "rotation": 0,
          "target": "1-hotspot-1"
        },
        {
          "yaw": 0.031299617911228594,
          "pitch": 0.10870066903457065,
          "rotation": 0,
          "target": "0-gorgons-gaze-entry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
