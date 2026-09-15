(() => {
  'use strict';

  const ready = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  };

  const ROUTES = {
    'schedule-day1': [
      {name:'제주국제공항', q:'제주국제공항 제주특별자치도', fallback:[33.5066,126.4930]},
      {name:'먹돌고기국수 제주본점', q:'먹돌고기국수 제주본점 제주', fallback:[33.5008,126.5120]},
      {name:'사려니숲길', q:'사려니숲길 제주', fallback:[33.4223,126.6277]},
      {name:'제주 스카이워터쇼', q:'스카이워터쇼 번영로 2172-80 제주', fallback:[33.4480,126.7480]},
      {name:'다이나믹메이즈 제주', q:'다이나믹메이즈 제주 성산', fallback:[33.4490,126.8060]},
      {name:'온평바다한그릇 성산본점', q:'온평바다한그릇 성산본점 제주', fallback:[33.4000,126.8720]},
      {name:'뷰 제주하늘', q:'뷰 제주하늘 제주', fallback:[33.3910,126.8580]},
      {name:'천지연폭포', q:'천지연폭포 제주', fallback:[33.2469,126.5544]},
      {name:'산방산 탄산온천', q:'산방산 탄산온천 제주', fallback:[33.2361,126.3042]},
      {name:'사계흑돼지 산방산본점', q:'사계흑돼지 산방산본점 제주', fallback:[33.2285,126.3060]},
      {name:'바인스테이', q:'제주 바인스테이 소길남길 제주', fallback:[33.4250,126.3700]}
    ],
    'schedule-day2': [
      {name:'바인스테이', q:'제주 바인스테이 소길남길 제주', fallback:[33.4250,126.3700]},
      {name:'문개어멍', q:'문개어멍 제주', fallback:[33.4200,126.2700]},
      {name:'시소 카이막 애월점', q:'시소 카이막 애월점 제주', fallback:[33.4660,126.3370]},
      {name:'도치돌알파카목장', q:'도치돌알파카목장 제주', fallback:[33.4070,126.3680]},
      {name:'9.81 파크 제주', q:'9.81 파크 제주', fallback:[33.3898,126.3664]},
      {name:'더마파크', q:'더마파크 제주 한림', fallback:[33.3445,126.2550]},
      {name:'은하 요가', q:'은하 요가 제주', fallback:[33.3970,126.3000]},
      {name:'성아시', q:'성아시 금능 제주', fallback:[33.3907,126.2280]},
      {name:'호텔 샌드', q:'호텔 샌드 제주 협재', fallback:[33.3940,126.2390]},
      {name:'우무 푸딩', q:'우무 제주 한림', fallback:[33.4160,126.2650]},
      {name:'곽지해수욕장', q:'곽지해수욕장 제주', fallback:[33.4509,126.3047]},
      {name:'애월 갈치 암행어사', q:'애월갈치 암행어사 제주', fallback:[33.4630,126.3110]},
      {name:'해지개', q:'해지개 카페 애월 제주', fallback:[33.4635,126.3090]},
      {name:'바인스테이', q:'제주 바인스테이 소길남길 제주', fallback:[33.4250,126.3700]}
    ],
    'schedule-day3': [
      {name:'바인스테이', q:'제주 바인스테이 소길남길 제주', fallback:[33.4250,126.3700]},
      {name:'상가리야자숲', q:'상가리야자숲 제주', fallback:[33.4360,126.3580]},
      {name:'제주고기국수 모던돔베 공항본점', q:'제주고기국수 모던돔베 공항본점 제주', fallback:[33.5000,126.5000]},
      {name:'돈키쥬쥬', q:'돈키쥬쥬 제주', fallback:[33.4550,126.4850]},
      {name:'본초족욕', q:'본초족욕 수목원길 제주', fallback:[33.4685,126.4830]},
      {name:'닭머르', q:'닭머르 제주 조천', fallback:[33.5530,126.6430]},
      {name:'점점', q:'점점 초당옥수수 아이스크림 제주', fallback:[33.5430,126.6600]},
      {name:'링로드', q:'링로드 에그타르트 제주', fallback:[33.5420,126.6650]},
      {name:'함덕해수욕장', q:'함덕해수욕장 제주', fallback:[33.5435,126.6692]},
      {name:'반디파스타', q:'반디파스타 제주', fallback:[33.5350,126.6500]},
      {name:'글로시말차', q:'글로시말차 제주', fallback:[33.5200,126.6000]},
      {name:'동문재래시장', q:'동문재래시장 제주', fallback:[33.5128,126.5280]},
      {name:'모찌마루', q:'모찌마루 제주', fallback:[33.5100,126.5250]},
      {name:'제주국제공항', q:'제주국제공항 제주특별자치도', fallback:[33.5066,126.4930]}
    ]
  };

  const maps = new Map();
  const routeCacheKey = 'jejuTripGeoCacheV1';
  let geoCache = {};
  try { geoCache = JSON.parse(localStorage.getItem(routeCacheKey) || '{}'); } catch (_) {}

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  function markerIcon(index, total){
    const cls = index === 0 ? 'start' : (index === total - 1 ? 'end' : '');
    return L.divIcon({
      className:'route-number-icon',
      html:`<div class="route-number-marker ${cls}">${index+1}</div>`,
      iconSize:[28,28],
      iconAnchor:[14,14],
      popupAnchor:[0,-14]
    });
  }

  async function geocodePlace(place){
    if (geoCache[place.q]) return geoCache[place.q];
    try{
      const url='https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=kr&q='+encodeURIComponent(place.q);
      const res=await fetch(url, {headers:{'Accept':'application/json'}});
      if(res.ok){
        const data=await res.json();
        if(data && data[0]){
          const point=[Number(data[0].lat), Number(data[0].lon)];
          geoCache[place.q]=point;
          try{localStorage.setItem(routeCacheKey, JSON.stringify(geoCache));}catch(_){ }
          return point;
        }
      }
    }catch(_){ }
    return place.fallback;
  }

  async function geocodeRoute(routeId, statusEl){
    const places=ROUTES[routeId] || [];
    const points=[];
    for(let i=0;i<places.length;i++){
      if(statusEl) statusEl.textContent=`실제 장소 위치 확인 중 · ${i+1}/${places.length}`;
      const point=await geocodePlace(places[i]);
      points.push(point);
      if(!geoCache[places[i].q]) await sleep(300);
    }
    return points;
  }

  async function fetchRoadGeometry(points){
    const coords=points.map(([lat,lng])=>`${lng},${lat}`).join(';');
    const url=`https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson&steps=false`;
    try{
      const res=await fetch(url);
      if(!res.ok) throw new Error('route error');
      const data=await res.json();
      if(data.routes && data.routes[0]) return data.routes[0];
    }catch(_){ }
    return null;
  }

  function googleDirectionsUrl(places){
    if(!places.length) return '#';
    const origin=encodeURIComponent(places[0].name+' 제주');
    const destination=encodeURIComponent(places[places.length-1].name+' 제주');
    const mids=places.slice(1,-1).map(p=>p.name+' 제주').join('|');
    let url=`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
    if(mids) url += `&waypoints=${encodeURIComponent(mids)}`;
    return url;
  }

  async function initRouteMap(routeId){
    if(maps.has(routeId)){
      const m=maps.get(routeId);
      setTimeout(()=>m.invalidateSize(),80);
      return;
    }
    if(typeof L==='undefined') return;

    const mapEl=document.getElementById(`${routeId}-map`);
    const statusEl=document.getElementById(`${routeId}-map-status`);
    if(!mapEl) return;

    const map=L.map(mapEl,{zoomControl:true,scrollWheelZoom:false,preferCanvas:true}).setView([33.38,126.53],9);
    maps.set(routeId,map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom:19,
      attribution:'&copy; OpenStreetMap contributors'
    }).addTo(map);

    const places=ROUTES[routeId] || [];
    const gLink=document.querySelector(`[data-google-route="${routeId}"]`);
    if(gLink) gLink.href=googleDirectionsUrl(places);

    const points=await geocodeRoute(routeId,statusEl);
    const bounds=[];
    points.forEach((point,i)=>{
      bounds.push(point);
      L.marker(point,{icon:markerIcon(i,points.length)})
        .addTo(map)
        .bindPopup(`<b>${i+1}. ${places[i].name}</b>`);
    });

    if(bounds.length) map.fitBounds(bounds,{padding:[36,36]});
    if(statusEl) statusEl.textContent='실제 도로 경로 계산 중...';

    const road=await fetchRoadGeometry(points);
    if(road && road.geometry && road.geometry.coordinates){
      const latlngs=road.geometry.coordinates.map(([lng,lat])=>[lat,lng]);
      L.polyline(latlngs,{color:'#F97316',weight:5,opacity:.92,lineJoin:'round'}).addTo(map);
      const km=(road.distance/1000).toFixed(1);
      const min=Math.round(road.duration/60);
      if(statusEl) statusEl.textContent=`전체 주행 약 ${km}km · 순수 이동 약 ${Math.floor(min/60)}시간 ${min%60}분`;
      setTimeout(()=>statusEl && statusEl.classList.add('done'),2200);
    }else{
      L.polyline(points,{color:'#F97316',weight:4,opacity:.78,dashArray:'7 7'}).addTo(map);
      if(statusEl) statusEl.textContent='도로 경로 서버 연결 실패 · 장소 위치를 직선으로 표시했습니다.';
      setTimeout(()=>statusEl && statusEl.classList.add('done'),3000);
    }
    setTimeout(()=>map.invalidateSize(),100);
  }

  ready(() => {
    const tabs=[...document.querySelectorAll('.tab')];
    const categories=[...document.querySelectorAll('.category')];
    tabs.forEach(tab=>tab.addEventListener('click',()=>{
      const target=tab.dataset.target;if(!target)return;
      tabs.forEach(item=>{const active=item===tab;item.classList.toggle('active',active);item.setAttribute('aria-selected',active?'true':'false');});
      categories.forEach(section=>section.classList.toggle('active',section.id===target));
    }));

    const dayTabs=[...document.querySelectorAll('.day-schedule-tab')];
    const dayPanels=[...document.querySelectorAll('.schedule-panel')];
    dayTabs.forEach(tab=>tab.addEventListener('click',()=>{
      const targetId=tab.dataset.schedule;if(!targetId)return;
      dayTabs.forEach(item=>{const active=item===tab;item.classList.toggle('active',active);item.setAttribute('aria-selected',active?'true':'false');});
      dayPanels.forEach(panel=>{const active=panel.id===targetId;panel.classList.toggle('active',active);panel.hidden=!active;});
      if(maps.has(targetId)) setTimeout(()=>maps.get(targetId).invalidateSize(),80);
    }));

    const scheduleToggles=[...document.querySelectorAll('.schedule-card-toggle')];
    scheduleToggles.forEach(button=>button.addEventListener('click',async()=>{
      const targetId=button.dataset.collapseTarget;
      const detailBody=targetId?document.getElementById(targetId):null;
      const panel=button.closest('.schedule-panel');
      const label=button.querySelector('.collapse-label');
      if(!detailBody||!panel)return;
      const nextExpanded=button.getAttribute('aria-expanded')!=='true';
      button.setAttribute('aria-expanded',String(nextExpanded));
      detailBody.hidden=!nextExpanded;
      panel.classList.toggle('collapsed',!nextExpanded);
      if(label) label.textContent=nextExpanded?'접기':'펼치기';
      if(nextExpanded){
        setTimeout(()=>initRouteMap(panel.id),60);
      }
    }));

    const topButton=document.createElement('button');
    topButton.type='button';topButton.className='back-to-top';topButton.setAttribute('aria-label','페이지 맨 위로 이동');topButton.title='맨 위로';topButton.textContent='↑';document.body.appendChild(topButton);
    const syncTopButton=()=>topButton.classList.toggle('show',window.scrollY>520);
    window.addEventListener('scroll',syncTopButton,{passive:true});syncTopButton();
    topButton.addEventListener('click',()=>{const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});});

    document.addEventListener('keydown',event=>{
      if(event.key!=='Escape')return;
      scheduleToggles.forEach(button=>{
        if(button.getAttribute('aria-expanded')!=='true')return;
        const targetId=button.dataset.collapseTarget;
        const detailBody=targetId?document.getElementById(targetId):null;
        const panel=button.closest('.schedule-panel');
        const label=button.querySelector('.collapse-label');
        button.setAttribute('aria-expanded','false');if(detailBody)detailBody.hidden=true;if(panel)panel.classList.add('collapsed');if(label)label.textContent='펼치기';
      });
    });
  });
})();
