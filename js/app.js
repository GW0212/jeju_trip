(() => {
  'use strict';

  const ROUTES = {"schedule-day1":{"title":"DAY 1","points":[{"seq":1,"name":"제주공항","lat":33.5066,"lng":126.493,"naver":"https://naver.me/5TiWH09m"},{"seq":2,"name":"짐 수령 · 렌터카 출발","lat":33.5066,"lng":126.493,"naver":"https://naver.me/5TiWH09m"},{"seq":3,"name":"먹돌고기국수 제주본점","lat":33.5008,"lng":126.512,"naver":"https://naver.me/xoGeo83K"},{"seq":4,"name":"사려니숲길","lat":33.4223,"lng":126.6277,"naver":"https://naver.me/53lKPuY7"},{"seq":5,"name":"제주 스카이워터쇼","lat":33.448,"lng":126.748,"naver":"https://naver.me/xmxIrdbH"},{"seq":6,"name":"다이나믹메이즈 제주","lat":33.449,"lng":126.806,"naver":"https://naver.me/55rm5FpK"},{"seq":7,"name":"온평바다한그릇 성산본점","lat":33.4,"lng":126.872,"naver":"https://naver.me/F64TyFxi"},{"seq":8,"name":"뷰 제주하늘","lat":33.391,"lng":126.858,"naver":"https://naver.me/x4FLYS7p"},{"seq":9,"name":"천지연폭포","lat":33.2469,"lng":126.5544,"naver":"https://naver.me/xAFC3J5w"},{"seq":10,"name":"산방산 탄산온천","lat":33.2361,"lng":126.3042,"naver":"https://naver.me/5mI0abxa"},{"seq":11,"name":"사계흑돼지","lat":33.2285,"lng":126.306,"naver":"https://naver.me/FgHDApUZ"},{"seq":12,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"}]},"schedule-day2":{"title":"DAY 2","points":[{"seq":1,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"},{"seq":2,"name":"문개어멍","lat":33.42,"lng":126.27,"naver":"https://naver.me/5GpYsyjp"},{"seq":3,"name":"시소 카이막 애월점","lat":33.466,"lng":126.337,"naver":"https://map.naver.com/p/entry/place/1635962925"},{"seq":4,"name":"도치돌알파카목장","lat":33.407,"lng":126.368,"naver":"https://naver.me/xprAP83t"},{"seq":5,"name":"9.81 파크 제주","lat":33.3898,"lng":126.3664,"naver":"https://naver.me/IgJG8AuB"},{"seq":6,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"},{"seq":7,"name":"은하 요가","lat":33.397,"lng":126.3,"naver":"https://naver.me/xCBXopKG"},{"seq":8,"name":"성아시","lat":33.3907,"lng":126.228,"naver":"https://naver.me/5S94geTT"},{"seq":9,"name":"호텔 샌드","lat":33.394,"lng":126.239,"naver":"https://naver.me/FHlgNVlc"},{"seq":10,"name":"우무 푸딩","lat":33.416,"lng":126.265,"naver":"https://naver.me/FK5vaTT8"},{"seq":11,"name":"곽지해수욕장","lat":33.4509,"lng":126.3047,"naver":"https://naver.me/5MVzrPxH"},{"seq":12,"name":"애월 갈치 암행어사","lat":33.463,"lng":126.311,"naver":"https://m.place.naver.com/restaurant/1042054066/home?entry=plt"},{"seq":13,"name":"해지개","lat":33.4635,"lng":126.309,"naver":"https://naver.me/FbiqjgSg"},{"seq":14,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"}]},"schedule-day3":{"title":"DAY 3","points":[{"seq":1,"name":"바인스테이","lat":33.425,"lng":126.37,"naver":"https://naver.me/F42RoD3p"},{"seq":2,"name":"상가리야자숲","lat":33.436,"lng":126.358,"naver":"https://m.place.naver.com/place/1647855493/home?entry=pll"},{"seq":3,"name":"제주고기국수 모던돔베 공항본점","lat":33.5,"lng":126.5,"naver":"https://naver.me/G7VAIuUd"},{"seq":4,"name":"돈키쥬쥬","lat":33.455,"lng":126.485,"naver":"https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EB%8F%88%ED%82%A4%EC%A5%AC%EC%A5%AC"},{"seq":5,"name":"닭머르","lat":33.553,"lng":126.643,"naver":"https://naver.me/5T4AvdCd"},{"seq":6,"name":"점점","lat":33.543,"lng":126.66,"naver":"https://naver.me/GtURn7qG"},{"seq":7,"name":"링로드","lat":33.542,"lng":126.665,"naver":"https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EB%A7%81%EB%A1%9C%EB%93%9C"},{"seq":8,"name":"함덕해수욕장","lat":33.5435,"lng":126.6692,"naver":"https://naver.me/xBwJypFt"},{"seq":9,"name":"반디파스타","lat":33.535,"lng":126.65,"naver":"https://naver.me/x2PkE7iU"},{"seq":10,"name":"글로시말차","lat":33.52,"lng":126.6,"naver":"https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EA%B8%80%EB%A1%9C%EC%8B%9C%EB%A7%90%EC%B0%A8"},{"seq":11,"name":"동문재래시장","lat":33.5128,"lng":126.528,"naver":"https://naver.me/xeAfYFPG"},{"seq":12,"name":"모찌마루","lat":33.51,"lng":126.525,"naver":"https://m.place.naver.com/restaurant/1034190148/home"},{"seq":13,"name":"제주공항 · 렌터카 반납","lat":33.5066,"lng":126.493,"naver":"https://naver.me/5TiWH09m"},{"seq":14,"name":"우무 & 우무솝 제주공항 출발점","lat":33.5066,"lng":126.493,"naver":"https://naver.me/GdlHw3qH"}]}};
  const MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty';
  const ROAD_CACHE_PREFIX = 'jeju-trip-road-v34:';
  const ROAD_CACHE_TTL = 30 * 24 * 60 * 60 * 1000;
  const maps = new Map();
  const routeStates = new Map();

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

  const emptyLineFeature = () => lineFeature([]);

  const cacheKey = (routeId, variant = 'full') =>
    `${ROAD_CACHE_PREFIX}${routeId}:${variant}`;

  const getCachedRoad = (routeId, variant = 'full') => {
    try {
      const raw = localStorage.getItem(cacheKey(routeId, variant));
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed?.ts || !parsed?.geometry) return null;
      if (Date.now() - parsed.ts > ROAD_CACHE_TTL) {
        localStorage.removeItem(cacheKey(routeId, variant));
        return null;
      }
      return parsed;
    } catch {
      return null;
    }
  };

  const saveCachedRoad = (routeId, variant, payload) => {
    try {
      localStorage.setItem(cacheKey(routeId, variant), JSON.stringify({
        ts: Date.now(),
        geometry: payload.geometry,
        distance: payload.distance,
        duration: payload.duration
      }));
    } catch {
      // Storage may be blocked; the map still works with the static path.
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

  const allSameCoordinate = (points) => {
    if (points.length < 2) return true;
    const first = points[0];
    return points.every((p) =>
      Math.abs(p.lat - first.lat) < 0.00001 &&
      Math.abs(p.lng - first.lng) < 0.00001
    );
  };

  const fetchRoadGeometry = async (route) => {
    if (route.points.length < 2 || allSameCoordinate(route.points)) {
      return null;
    }
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

  const createMarkerElement = (point) => {
    const wrap = document.createElement('div');
    wrap.className = 'route-marker-wrap';

    const pin = document.createElement('div');
    pin.className = 'route-number-marker';
    pin.textContent = String(point.seq);
    wrap.appendChild(pin);

    return wrap;
  };

  const buildMarkerOffset = (route, index) => {
    const current = route.points[index];
    const sameIndices = route.points
      .map((p, i) => ({ p, i }))
      .filter(({ p }) =>
        Math.abs(p.lat - current.lat) < 0.00001 &&
        Math.abs(p.lng - current.lng) < 0.00001
      )
      .map(({ i }) => i);

    if (sameIndices.length <= 1) return [0, 0];

    const pos = sameIndices.indexOf(index);
    const spread = 18;
    const center = (sameIndices.length - 1) / 2;
    return [Math.round((pos - center) * spread), 0];
  };

  const addMarkers = (map, route) => {
    return route.points.map((point, index) => {
      const popupHtml =
        `<b>${escapeHtml(point.seq)}. ${escapeHtml(point.name)}</b>` +
        (point.naver
          ? `<br><a class="map-popup-link" href="${escapeHtml(point.naver)}" target="_blank" rel="noopener noreferrer">네이버 지도 바로가기 ↗</a>`
          : '');

      const element = createMarkerElement(point);
      const marker = new maplibregl.Marker({
        element,
        anchor: 'center',
        offset: buildMarkerOffset(route, index)
      })
        .setLngLat([point.lng, point.lat])
        .setPopup(new maplibregl.Popup({ offset: 20 }).setHTML(popupHtml))
        .addTo(map);

      return { point, marker, element };
    });
  };

  const clearMarkerEndpointStyle = (entry) => {
    entry.element.classList.remove('start', 'end', 'range-hidden');
    const label = entry.element.querySelector('.route-marker-label');
    if (label) label.remove();
  };

  const styleVisibleMarkers = (state, visiblePoints) => {
    const visibleSeqs = new Set(visiblePoints.map((p) => p.seq));
    const firstSeq = visiblePoints[0]?.seq;
    const lastSeq = visiblePoints[visiblePoints.length - 1]?.seq;

    state.markers.forEach((entry) => {
      clearMarkerEndpointStyle(entry);

      if (!visibleSeqs.has(entry.point.seq)) {
        entry.element.classList.add('range-hidden');
        return;
      }

      if (entry.point.seq === firstSeq) {
        entry.element.classList.add('start');
      }
      if (entry.point.seq === lastSeq) {
        entry.element.classList.add('end');
      }

      if (entry.point.seq === firstSeq || entry.point.seq === lastSeq) {
        const label = document.createElement('span');
        label.className = 'route-marker-label';
        label.textContent = `${entry.point.seq}. ${entry.point.name}`;
        entry.element.appendChild(label);
      }
    });
  };

  const fitPoints = (map, points) => {
    if (!points.length) return;

    if (points.length === 1 || allSameCoordinate(points)) {
      map.easeTo({
        center: [points[0].lng, points[0].lat],
        zoom: 14.5,
        duration: 450
      });
      return;
    }

    const bounds = new maplibregl.LngLatBounds();
    points.forEach((p) => bounds.extend([p.lng, p.lat]));
    map.fitBounds(bounds, {
      padding: window.innerWidth <= 620
        ? { top: 55, right: 42, bottom: 60, left: 42 }
        : { top: 60, right: 65, bottom: 65, left: 65 },
      duration: 450
    });
  };

  const addRouteLayers = (map, route) => {
    map.addSource('route-static', {
      type: 'geojson',
      data: lineFeature(routeCoords(route))
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
      data: emptyLineFeature()
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

  const updateStaticLayer = (map, points) => {
    const source = map.getSource('route-static');
    if (!source) return;
    source.setData(lineFeature(points.map((p) => [p.lng, p.lat])));
  };

  const clearRoadLayer = (map) => {
    const source = map.getSource('route-road');
    if (source) source.setData(emptyLineFeature());
  };

  const updateRoadLayer = (map, geometry) => {
    const source = map.getSource('route-road');
    if (!source) return;
    if (!geometry?.coordinates?.length) {
      source.setData(emptyLineFeature());
      return;
    }
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

  const makeSubRoute = (route, startSeq, endSeq) => {
    const startIndex = route.points.findIndex((p) => p.seq === startSeq);
    const endIndex = route.points.findIndex((p) => p.seq === endSeq);
    if (startIndex < 0 || endIndex < 0 || startIndex >= endIndex) return null;

    return {
      title: route.title,
      points: route.points.slice(startIndex, endIndex + 1)
    };
  };

  const enhanceRoadForView = async (
    routeId,
    map,
    route,
    variant,
    statusPrefix
  ) => {
    if (route.points.length < 2 || allSameCoordinate(route.points)) {
      clearRoadLayer(map);
      setStatus(routeId, `${statusPrefix} · 같은 위치 내 일정`, true);
      return;
    }

    const cached = getCachedRoad(routeId, variant);
    if (cached) {
      updateRoadLayer(map, cached.geometry);
      setStatus(
        routeId,
        `${statusPrefix}${formatRoadStats(cached.distance, cached.duration)}`,
        true
      );
      return;
    }

    clearRoadLayer(map);
    setStatus(routeId, `${statusPrefix} · 실제 도로 경로 확인 중`);
    try {
      const road = await fetchRoadGeometry(route);
      if (!road) {
        setStatus(routeId, statusPrefix, true);
        return;
      }
      saveCachedRoad(routeId, variant, road);
      updateRoadLayer(map, road.geometry);
      setStatus(
        routeId,
        `${statusPrefix}${formatRoadStats(road.distance, road.duration)}`,
        true
      );
    } catch {
      setStatus(routeId, `${statusPrefix} · 기본 일정 동선 표시`, true);
    }
  };

  const showFullRoute = (routeId, animate = true) => {
    const state = routeStates.get(routeId);
    const route = ROUTES[routeId];
    if (!state || !route) return;

    const { map } = state;
    state.mode = 'full';

    updateStaticLayer(map, route.points);
    styleVisibleMarkers(state, route.points);
    if (animate) fitPoints(map, route.points);

    const start = document.querySelector(`[data-route-start="${routeId}"]`);
    const end = document.querySelector(`[data-route-end="${routeId}"]`);
    if (start) start.value = String(route.points[0].seq);
    if (end) end.value = String(route.points[route.points.length - 1].seq);

    enhanceRoadForView(
      routeId,
      map,
      route,
      'full',
      '전체 일정 경로'
    );
  };

  const showRouteSegment = (routeId, startSeq, endSeq) => {
    const state = routeStates.get(routeId);
    const route = ROUTES[routeId];
    if (!state || !route) return;

    const subRoute = makeSubRoute(route, startSeq, endSeq);
    if (!subRoute) return;

    state.mode = 'segment';
    state.startSeq = startSeq;
    state.endSeq = endSeq;

    updateStaticLayer(state.map, subRoute.points);
    styleVisibleMarkers(state, subRoute.points);
    fitPoints(state.map, subRoute.points);

    enhanceRoadForView(
      routeId,
      state.map,
      subRoute,
      `${startSeq}-${endSeq}`,
      `${startSeq} → ${endSeq} 선택 구간`
    );
  };

  const populateRangeControls = (routeId) => {
    const route = ROUTES[routeId];
    if (!route) return;

    const start = document.querySelector(`[data-route-start="${routeId}"]`);
    const end = document.querySelector(`[data-route-end="${routeId}"]`);
    if (!start || !end || start.options.length || end.options.length) return;

    route.points.forEach((point) => {
      const label = `${point.seq}. ${point.name}`;

      const sOpt = document.createElement('option');
      sOpt.value = String(point.seq);
      sOpt.textContent = label;
      start.appendChild(sOpt);

      const eOpt = document.createElement('option');
      eOpt.value = String(point.seq);
      eOpt.textContent = label;
      end.appendChild(eOpt);
    });

    start.value = String(route.points[0].seq);
    end.value = String(route.points[route.points.length - 1].seq);

    const syncValidity = (changed) => {
      const startIndex = route.points.findIndex(
        (p) => p.seq === Number(start.value)
      );
      const endIndex = route.points.findIndex(
        (p) => p.seq === Number(end.value)
      );

      if (startIndex < endIndex) return;

      if (changed === 'start') {
        const next = route.points[Math.min(startIndex + 1, route.points.length - 1)];
        if (next) end.value = String(next.seq);
        if (startIndex === route.points.length - 1) {
          const prev = route.points[Math.max(0, startIndex - 1)];
          start.value = String(prev.seq);
          end.value = String(route.points[startIndex].seq);
        }
      } else {
        const prev = route.points[Math.max(0, endIndex - 1)];
        if (prev) start.value = String(prev.seq);
        if (endIndex === 0) {
          start.value = String(route.points[0].seq);
          end.value = String(route.points[1].seq);
        }
      }
    };

    start.addEventListener('change', () => syncValidity('start'));
    end.addEventListener('change', () => syncValidity('end'));

    const apply = document.querySelector(`[data-route-apply="${routeId}"]`);
    const reset = document.querySelector(`[data-route-reset="${routeId}"]`);

    apply?.addEventListener('click', () => {
      syncValidity('start');
      showRouteSegment(routeId, Number(start.value), Number(end.value));
    });

    reset?.addEventListener('click', () => {
      showFullRoute(routeId);
    });
  };

  const ensureMapInteractions = (map) => {
    map.dragPan.enable();
    map.scrollZoom.enable();
    map.boxZoom.enable();
    map.doubleClickZoom.enable();
    map.touchZoomRotate.enable();
    map.keyboard.enable();
    map.dragRotate.disable();
    if (map.touchPitch && typeof map.touchPitch.disable === 'function') {
      map.touchPitch.disable();
    }

    const canvas = map.getCanvas();
    const container = map.getCanvasContainer();
    canvas.style.pointerEvents = 'auto';
    canvas.style.touchAction = 'none';
    canvas.style.cursor = 'grab';
    container.style.pointerEvents = 'auto';
    container.style.touchAction = 'none';
  };

  const initRouteMap = (routeId) => {
    const route = ROUTES[routeId];
    const el = document.getElementById(`${routeId}-map`);
    if (!route || !el || typeof maplibregl === 'undefined') return;

    populateRangeControls(routeId);

    if (maps.has(routeId)) {
      const existing = maps.get(routeId);
      ensureMapInteractions(existing);
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
      interactive: true,
      dragPan: true,
      scrollZoom: true,
      boxZoom: true,
      doubleClickZoom: true,
      touchZoomRotate: true,
      keyboard: true,
      dragRotate: false,
      touchPitch: false,
      cooperativeGestures: false
    });

    ensureMapInteractions(map);

    const canvas = map.getCanvas();
    map.on('dragstart', () => {
      canvas.style.cursor = 'grabbing';
    });
    map.on('dragend', () => {
      canvas.style.cursor = 'grab';
    });

    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      'top-left'
    );

    maps.set(routeId, map);

    map.on('load', () => {
      addRouteLayers(map, route);
      const markers = addMarkers(map, route);
      routeStates.set(routeId, {
        map,
        markers,
        mode: 'full',
        startSeq: route.points[0].seq,
        endSeq: route.points[route.points.length - 1].seq
      });
      showFullRoute(routeId, false);
      fitPoints(map, route.points);
    });
  };

  ready(() => {
    Object.keys(ROUTES).forEach(populateRangeControls);

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
