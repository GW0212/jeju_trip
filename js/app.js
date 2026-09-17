(() => {
  'use strict';

  const ROUTES = {"schedule-day1":{"title":"DAY 1","points":[{"seq":1,"name":"제주공항","lat":33.5066,"lng":126.493,"naver":"https://naver.me/5TiWH09m"},{"seq":3,"name":"먹돌고기국수 제주본점","lat":33.5008,"lng":126.512,"naver":"https://naver.me/xoGeo83K"},{"seq":4,"name":"사려니숲길","lat":33.4223,"lng":126.6277,"naver":"https://naver.me/53lKPuY7"},{"seq":5,"name":"제주 스카이워터쇼","lat":33.448,"lng":126.748,"naver":"https://naver.me/xmxIrdbH"},{"seq":6,"name":"다이나믹메이즈 제주","lat":33.449,"lng":126.806,"naver":"https://naver.me/55rm5FpK"},{"seq":7,"name":"온평바다한그릇 성산본점","lat":33.4,"lng":126.872,"naver":"https://naver.me/F64TyFxi"},{"seq":8,"name":"뷰 제주하늘","lat":33.391,"lng":126.858,"naver":"https://naver.me/x4FLYS7p"},{"seq":9,"name":"천지연폭포","lat":33.2469,"lng":126.5544,"naver":"https://naver.me/xAFC3J5w"},{"seq":10,"name":"산방산 탄산온천","lat":33.2361,"lng":126.3042,"naver":"https://naver.me/5mI0abxa"},{"seq":11,"name":"사계흑돼지","lat":33.2285,"lng":126.306,"naver":"https://naver.me/FgHDApUZ"},{"seq":12,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"}]},"schedule-day2":{"title":"DAY 2","points":[{"seq":1,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"},{"seq":2,"name":"문개어멍","lat":33.42,"lng":126.27,"naver":"https://naver.me/5GpYsyjp"},{"seq":3,"name":"시소 카이막 애월점","lat":33.466,"lng":126.337,"naver":"https://map.naver.com/p/entry/place/1635962925"},{"seq":4,"name":"도치돌알파카목장","lat":33.407,"lng":126.368,"naver":"https://naver.me/xprAP83t"},{"seq":5,"name":"9.81 파크 제주","lat":33.3898,"lng":126.3664,"naver":"https://naver.me/IgJG8AuB"},{"seq":6,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"},{"seq":7,"name":"은하 요가","lat":33.397,"lng":126.3,"naver":"https://naver.me/xCBXopKG"},{"seq":8,"name":"성아시","lat":33.3907,"lng":126.228,"naver":"https://naver.me/5S94geTT"},{"seq":9,"name":"호텔 샌드","lat":33.394,"lng":126.239,"naver":"https://naver.me/FHlgNVlc"},{"seq":10,"name":"우무 푸딩","lat":33.416,"lng":126.265,"naver":"https://naver.me/FK5vaTT8"},{"seq":11,"name":"곽지해수욕장","lat":33.4509,"lng":126.3047,"naver":"https://naver.me/5MVzrPxH"},{"seq":12,"name":"애월 갈치 암행어사","lat":33.463,"lng":126.311,"naver":"https://m.place.naver.com/restaurant/1042054066/home?entry=plt"},{"seq":13,"name":"해지개","lat":33.4635,"lng":126.309,"naver":"https://naver.me/FbiqjgSg"},{"seq":14,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"}]},"schedule-day3":{"title":"DAY 3","points":[{"seq":1,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"},{"seq":2,"name":"상가리야자숲","lat":33.436,"lng":126.358,"naver":"https://m.place.naver.com/place/1647855493/home?entry=pll"},{"seq":3,"name":"제주고기국수 모던돔베 공항본점","lat":33.5,"lng":126.5,"naver":"https://naver.me/G7VAIuUd"},{"seq":4,"name":"돈키쥬쥬","lat":33.455,"lng":126.485,"naver":"https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EB%8F%88%ED%82%A4%EC%A5%AC%EC%A5%AC"},{"seq":5,"name":"닭머르","lat":33.553,"lng":126.643,"naver":"https://naver.me/5T4AvdCd"},{"seq":6,"name":"점점","lat":33.543,"lng":126.66,"naver":"https://naver.me/GtURn7qG"},{"seq":7,"name":"링로드","lat":33.542,"lng":126.665,"naver":"https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EB%A7%81%EB%A1%9C%EB%93%9C"},{"seq":8,"name":"함덕해수욕장","lat":33.5435,"lng":126.6692,"naver":"https://naver.me/xBwJypFt"},{"seq":9,"name":"반디파스타","lat":33.535,"lng":126.65,"naver":"https://naver.me/x2PkE7iU"},{"seq":10,"name":"글로시말차","lat":33.52,"lng":126.6,"naver":"https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EA%B8%80%EB%A1%9C%EC%8B%9C%EB%A7%90%EC%B0%A8"},{"seq":11,"name":"동문재래시장","lat":33.5128,"lng":126.528,"naver":"https://naver.me/xeAfYFPG"},{"seq":12,"name":"모찌마루","lat":33.51,"lng":126.525,"naver":"https://m.place.naver.com/restaurant/1034190148/home"},{"seq":13,"name":"제주공항 · 렌터카 반납","lat":33.5066,"lng":126.493,"naver":"https://naver.me/5TiWH09m"}]}};
  const MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty';
  const ROAD_CACHE_PREFIX = 'jeju-trip-road-v32:';
  const ROAD_CACHE_TTL = 30 * 24 * 60 * 60 * 1000;
  const maps = new Map();

  const ready = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  };

  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const routeCoords = (route) =>
    route.points.map((point) => [point.lng, point.lat]);

  const lineFeature = (coords) => ({
    type: 'Feature',
    properties: {},
    geometry: { type: 'LineString', coordinates: coords }
  });

  const cacheKey = (routeId) => ROAD_CACHE_PREFIX + routeId;

  const getCachedRoad = (routeId) => {
    try {
      const raw = localStorage.getItem(cacheKey(routeId));
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed?.ts || !parsed?.geometry) return null;
      if (Date.now() - parsed.ts > ROAD_CACHE_TTL) {
        localStorage.removeItem(cacheKey(routeId));
        return null;
      }
      return parsed;
    } catch {
      return null;
    }
  };

  const saveCachedRoad = (routeId, payload) => {
    try {
      localStorage.setItem(cacheKey(routeId), JSON.stringify({
        ts: Date.now(),
        geometry: payload.geometry,
        distance: payload.distance,
        duration: payload.duration
      }));
    } catch {
      // Storage can be blocked; the map still works with the static route.
    }
  };

  const formatRoadStats = (distance, duration) => {
    if (!Number.isFinite(distance) || !Number.isFinite(duration)) return '';
    const km = (distance / 1000).toFixed(distance >= 100000 ? 0 : 1);
    const mins = Math.round(duration / 60);
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return ` · ${km}km · ${h ? `${h}시간 ` : ''}${m}분`;
  };

  const fetchRoadGeometry = async (route) => {
    const coords = route.points.map((p) => `${p.lng},${p.lat}`).join(';');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6500);
    try {
      const url =
        `https://router.project-osrm.org/route/v1/driving/${coords}` +
        '?overview=full&geometries=geojson&steps=false';
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`OSRM ${res.status}`);
      const data = await res.json();
      const road = data?.routes?.[0];
      if (!road?.geometry?.coordinates?.length) throw new Error('No route geometry');
      return {
        geometry: road.geometry,
        distance: road.distance,
        duration: road.duration
      };
    } finally {
      clearTimeout(timeout);
    }
  };

  const createMarkerElement = (point, index, total) => {
    const wrap = document.createElement('div');
    const isStart = index === 0;
    const isEnd = index === total - 1;
    wrap.className = `route-marker-wrap${isStart ? ' start' : ''}${isEnd ? ' end' : ''}`;

    const pin = document.createElement('div');
    pin.className = 'route-number-marker';
    pin.textContent = String(point.seq);
    wrap.appendChild(pin);

    if (isStart || isEnd) {
      const label = document.createElement('span');
      label.className = 'route-marker-label';
      label.textContent = `${point.seq}. ${point.name}`;
      wrap.appendChild(label);
    }
    return wrap;
  };

  const addMarkers = (map, route) => {
    const first = route.points[0];
    const last = route.points[route.points.length - 1];
    const sameEndpoint =
      Math.abs(first.lat - last.lat) < 0.00001 &&
      Math.abs(first.lng - last.lng) < 0.00001;

    route.points.forEach((point, index) => {
      let offset = [0, 0];
      if (sameEndpoint && index === 0) offset = [-13, 0];
      if (sameEndpoint && index === route.points.length - 1) offset = [13, 0];

      const popupHtml =
        `<b>${escapeHtml(point.seq)}. ${escapeHtml(point.name)}</b>` +
        (point.naver
          ? `<br><a class="map-popup-link" href="${escapeHtml(point.naver)}" target="_blank" rel="noopener noreferrer">네이버 지도 바로가기 ↗</a>`
          : '');

      new maplibregl.Marker({
        element: createMarkerElement(point, index, route.points.length),
        anchor: 'center',
        offset
      })
        .setLngLat([point.lng, point.lat])
        .setPopup(new maplibregl.Popup({ offset: 20 }).setHTML(popupHtml))
        .addTo(map);
    });
  };

  const fitRoute = (map, route) => {
    const bounds = new maplibregl.LngLatBounds();
    route.points.forEach((p) => bounds.extend([p.lng, p.lat]));
    map.fitBounds(bounds, {
      padding: window.innerWidth <= 620
        ? { top: 55, right: 42, bottom: 60, left: 42 }
        : { top: 60, right: 65, bottom: 65, left: 65 },
      duration: 0
    });
  };

  const addRouteLayers = (map, route) => {
    const staticGeo = lineFeature(routeCoords(route));

    map.addSource('route-static', {
      type: 'geojson',
      data: staticGeo
    });

    map.addLayer({
      id: 'route-static-shadow',
      type: 'line',
      source: 'route-static',
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': '#FFD0A6',
        'line-width': 8,
        'line-opacity': 0.75
      }
    });

    map.addLayer({
      id: 'route-static',
      type: 'line',
      source: 'route-static',
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': '#F97316',
        'line-width': 3,
        'line-opacity': 0.82,
        'line-dasharray': [2, 2]
      }
    });

    map.addSource('route-road', {
      type: 'geojson',
      data: lineFeature([])
    });

    map.addLayer({
      id: 'route-road',
      type: 'line',
      source: 'route-road',
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': '#F97316',
        'line-width': 5,
        'line-opacity': 0.96
      }
    });
  };

  const updateRoadLayer = (map, geometry) => {
    const source = map.getSource('route-road');
    if (!source || !geometry?.coordinates?.length) return;
    source.setData({
      type: 'Feature',
      properties: {},
      geometry
    });
  };

  const setStatus = (routeId, text, done = false) => {
    const el = document.getElementById(`${routeId}-map-status`);
    if (!el) return;
    el.textContent = text;
    el.classList.toggle('done', done);
  };

  const enhanceWithRoad = async (routeId, map, route) => {
    const cached = getCachedRoad(routeId);
    if (cached) {
      updateRoadLayer(map, cached.geometry);
      setStatus(
        routeId,
        `저장된 실제 도로 경로 적용${formatRoadStats(cached.distance, cached.duration)}`,
        true
      );
      return;
    }

    setStatus(routeId, '일정 동선 표시 완료 · 실제 도로 경로를 확인하는 중입니다.');
    try {
      const road = await fetchRoadGeometry(route);
      saveCachedRoad(routeId, road);
      updateRoadLayer(map, road.geometry);
      setStatus(
        routeId,
        `실제 도로 경로 적용${formatRoadStats(road.distance, road.duration)}`,
        true
      );
    } catch {
      setStatus(
        routeId,
        '일정 동선은 표시되었습니다. 실제 도로 경로 보정 서버 응답이 없어 기본 일정 동선을 표시합니다.',
        true
      );
    }
  };

  const initRouteMap = (routeId) => {
    const route = ROUTES[routeId];
    const el = document.getElementById(`${routeId}-map`);
    if (!route || !el || typeof maplibregl === 'undefined') return;

    if (maps.has(routeId)) {
      const existing = maps.get(routeId);
      requestAnimationFrame(() => existing.resize());
      return;
    }

    const center = route.points.reduce(
      (acc, p) => [acc[0] + p.lng, acc[1] + p.lat],
      [0, 0]
    ).map((v) => v / route.points.length);

    const map = new maplibregl.Map({
      container: el,
      style: MAP_STYLE,
      center,
      zoom: 9.2,
      attributionControl: true,
      scrollZoom: true
    });

    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      'top-left'
    );

    maps.set(routeId, map);

    map.on('load', () => {
      addRouteLayers(map, route);
      addMarkers(map, route);
      fitRoute(map, route);
      setStatus(routeId, '일정 동선 표시 완료 · 실제 도로 경로를 확인하는 중입니다.');
      enhanceWithRoad(routeId, map, route);
    });
  };

  ready(() => {
    const tabs = [...document.querySelectorAll('.tab')];
    const categories = [...document.querySelectorAll('.category')];

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        if (!target) return;

        tabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        categories.forEach((section) => {
          section.classList.toggle('active', section.id === target);
        });

        if (target === 'detail') {
          const activeDay =
            document.querySelector('.schedule-panel.active')?.id ||
            'schedule-day1';
          setTimeout(() => initRouteMap(activeDay), 30);
        }
      });
    });

    const dayTabs = [...document.querySelectorAll('.day-schedule-tab')];
    const dayPanels = [...document.querySelectorAll('.schedule-panel')];

    dayTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.schedule;
        if (!targetId) return;

        dayTabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        dayPanels.forEach((panel) => {
          const active = panel.id === targetId;
          panel.classList.toggle('active', active);
          panel.hidden = !active;
        });

        setTimeout(() => initRouteMap(targetId), 30);
      });
    });

    const topButton = document.createElement('button');
    topButton.type = 'button';
    topButton.className = 'back-to-top';
    topButton.setAttribute('aria-label', '페이지 맨 위로 이동');
    topButton.title = '맨 위로';
    topButton.textContent = '↑';
    document.body.appendChild(topButton);

    const syncTopButton = () => {
      topButton.classList.toggle('show', window.scrollY > 520);
    };

    window.addEventListener('scroll', syncTopButton, { passive: true });
    syncTopButton();

    topButton.addEventListener('click', () => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    });
  });
})();
