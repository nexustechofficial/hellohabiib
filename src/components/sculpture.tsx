"use client";
import { useEffect, useRef } from 'react';
export function Sculpture() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = container.current;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!host || matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(min-width: 769px) and (pointer: fine)').matches || connection?.saveData) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    import('three').then(THREE => {
      if (disposed) return;
      let renderer: import('three').WebGLRenderer;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); } catch { return; }
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.setClearColor(0, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.5;
      renderer.domElement.setAttribute('aria-hidden', 'true');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(33, 1, .1, 50); camera.position.set(0, .25, 8.8);
      const shape = new THREE.Shape();
      [[-1.3,-1.65],[-.45,-1.65],[-.45,-.35],[.45,-.35],[.45,-1.65],[1.3,-1.65],[1.3,1.65],[.45,1.65],[.45,.45],[-.45,.45],[-.45,1.65],[-1.3,1.65]].forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();
      const geometry = new THREE.ExtrudeGeometry(shape,{depth:.55,bevelEnabled:true,bevelSize:.1,bevelThickness:.12,bevelSegments:3,steps:1});geometry.center();
      const metal = new THREE.MeshStandardMaterial({color:0x383534,metalness:.82,roughness:.28});
      const group = new THREE.Group();group.add(new THREE.Mesh(geometry,metal));
      const seamGeometry = new THREE.BoxGeometry(.89,.045,.025);
      const seamMaterial = new THREE.MeshStandardMaterial({color:0xff481f,emissive:0xff481f,emissiveIntensity:4});
      const seam = new THREE.Mesh(seamGeometry,seamMaterial);seam.position.set(0,.02,.42);group.add(seam);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry,32),new THREE.LineBasicMaterial({color:0x79726a,transparent:true,opacity:.25}));group.add(edges);
      group.rotation.set(.12,-.43,-.12);scene.add(group);
      scene.add(new THREE.HemisphereLight(0xffffff,0x24201d,2.5));
      const key = new THREE.DirectionalLight(0xffeee0,8);key.position.set(-3,4,5);scene.add(key);
      const rim = new THREE.DirectionalLight(0xff481f,5);rim.position.set(3,-1,-2);scene.add(rim);
      const fill = new THREE.PointLight(0xff481f,1.2,8);fill.position.set(0,0,2);scene.add(fill);
      let frame=0; let visible=true;let pointerX=0;let pointerY=0;
      const resize=()=>{const {width,height}=host.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();};resize();
      const observer=new ResizeObserver(resize);observer.observe(host);
      const move=(event:PointerEvent)=>{const box=host.getBoundingClientRect();pointerX=((event.clientX-box.left)/box.width-.5)*.18;pointerY=((event.clientY-box.top)/box.height-.5)*.12;};
      const leave=()=>{pointerX=0;pointerY=0;};host.addEventListener('pointermove',move);host.addEventListener('pointerleave',leave);
      const render=(time:number)=>{if(disposed||!visible||document.hidden)return;group.rotation.y+=(-.43+pointerX-group.rotation.y)*.045;group.rotation.x+=(.12+pointerY-group.rotation.x)*.045;group.position.y=Math.sin(time*.0005)*.06;renderer.render(scene,camera);frame=requestAnimationFrame(render);};
      const start=()=>{cancelAnimationFrame(frame);if(visible&&!document.hidden)frame=requestAnimationFrame(render);};
      const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;start();});intersection.observe(host);
      document.addEventListener('visibilitychange',start);
      host.append(renderer.domElement);host.classList.add('webgl-ready');
      const lost=(event:Event)=>{event.preventDefault();cancelAnimationFrame(frame);host.classList.remove('webgl-ready');};renderer.domElement.addEventListener('webglcontextlost',lost);
      start();
      cleanup=()=>{cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();document.removeEventListener('visibilitychange',start);host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);renderer.domElement.removeEventListener('webglcontextlost',lost);geometry.dispose();metal.dispose();seamGeometry.dispose();seamMaterial.dispose();edges.geometry.dispose();(edges.material as import('three').Material).dispose();renderer.dispose();renderer.domElement.remove();host.classList.remove('webgl-ready');};
    }).catch(()=>{});
    return()=>{disposed=true;cleanup?.();};
  }, []);
  return <div className="sculpture" ref={container} role="img" aria-label="Original sculptural H monogram in dark metal with an orange illuminated seam"><div className="sculpture-halo"/><div className="sculpture-orbit"/><div className="monogram-fallback" aria-hidden="true"><div className="metal-bar left"/><div className="metal-bar right"/><div className="metal-cross"/><div className="metal-seam"/></div><div className="sculpture-caption" aria-hidden="true"><span>H—01</span><span>IDEAS, GIVEN FORM.</span></div><span className="sculpture-axis axis-x" aria-hidden="true">+</span><span className="sculpture-axis axis-y" aria-hidden="true">+</span></div>;
}
