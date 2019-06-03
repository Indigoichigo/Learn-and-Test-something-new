function init() {
  // step1. set a scene
  // const THREE = new three();
  const scene = new THREE.Scene();

  // step2. set camera
  // THREE.PerspectiveCamera(fov, aspect, near, far)
  // fov: 可視區域，是一個角度，遊戲一般設定在在60~90，推薦值50
  // aspect: 橫向尺寸與直向尺寸的比值由於瀏覽器為我們看的介面，一般都設定寬/高
  // near: 距離攝影機多近的距離開始渲染
  // far: 從攝影機可以看到多遠
  // THREE.OrthographicCamera 正交攝影機，不受遠近影響

  // get browser width and height, use for aspect
  const width = window.innerWidth;
  const height = window.innerHeight;
  // set camera params                      fov      aspect    near far
  const camera = new THREE.PerspectiveCamera(50, width / height, 1, 800);

  // set camera position
  camera.position.x = 10;
  camera.position.y = 10;
  camera.position.z = 30;
  console.log('scene.position', scene);
  camera.lookAt(scene.position);

  //create a renderer
  const renderer = new THREE.WebGLRenderer();

  // 设置渲染器的清除颜色（即背景色）和尺寸。
  // 若想用 body 作为背景，则可以不设置 clearColor，然后在创建渲染器时设置 alpha: true，即 new THREE.WebGLRenderer({ alpha: true })
  renderer.setClearColor(0xcccccc); // 背景色
  renderer.setSize(width, height);

  // 创建一个长宽高均为 4 个单位长度的立方体（几何体）
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);

  // 创建材质（该材质不受光源影响）
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });

  // 创建一个立方体网格（mesh）：将材质包裹在几何体上
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  // set cube position
  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;

  // rotate cube angle
  // cube.rotation.x = 0.3;
  // cube.rotation.y = 0.3;
  // cube.rotation.z = 0.3;
  const animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();

  const axisHelper = new THREE.AxisHelper(10);
  // 将立方体网格加入到场景中
  scene.add(cube);
  scene.add(axisHelper);

  // 将渲染器的输出（此处是 canvas 元素）插入到 body 中
  document.body.appendChild(renderer.domElement);

  // 渲染，即摄像机拍下此刻的场景
  renderer.render(scene, camera);
}
init();
