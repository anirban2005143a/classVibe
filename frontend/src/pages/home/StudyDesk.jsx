import { useState, useEffect } from 'react'
import * as THREE from "three"
import * as dat from "dat.gui"
import gsap from 'gsap'
import { OrbitControls, GLTFLoader, DRACOLoader } from 'three/examples/jsm/Addons.js'
const  StudyDesk = ()=> {
  // console.log(THREE)

  useEffect(() => {
    const canvas = document.querySelector("canvas")

    //sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    console.log(sizes)
    let modelScale = window.innerWidth / 1200;
    // if (sizes.width / 700 >= 1) modelScale = 0.7
    // else if (sizes.width / 700 >= 0.7) modelScale = 0.7
    // else modelScale = sizes.width / 700

    //scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("#fff1e4")

    //gui
    const gui = new dat.GUI({ closed: true })

    //gltf loader
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/node_modules/three/examples/jsm/libs/draco/')
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.load(
      "/studyTable.glb",
      (model) => {
        // console.log(model)

        //add model into scene
        const modelMesh = [...model.scene.children]
        modelMesh.forEach((mesh) => {
          mesh.rotation.set(0.02, -0.72, 0)
          mesh.scale.set(modelScale, modelScale, modelScale)
          // gui.add(mesh.position , "x").min(-2).max(2).step(0.01).name("objectx")
          // gui.add(mesh.position , "y").min(-2).max(2).step(0.01).name("objecty")
          // gui.add(mesh.position , "z").min(-2).max(2).step(0.01).name("objectz")
          gui.add(mesh.rotation, "x").min(-Math.PI).max(Math.PI).step(0.01).name("object-r-x")
          gui.add(mesh.rotation, "y").min(-Math.PI).max(Math.PI).step(0.01).name("object-r-y")
          gui.add(mesh.rotation, "z").min(-Math.PI).max(Math.PI).step(0.01).name("object-r-z")
          gsap.from(mesh.rotation, {
            duration: 1,
            ease: 'power1.inOut',
            x: "4",
            y: "1",
            z: "2"
          })
          scene.add(mesh)

        })

      }
    )

    //camera group
    const cameraGroup = new THREE.Group()
    scene.add(cameraGroup)

    //camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
    camera.position.set(0, 0, 3.5)
    cameraGroup.add(camera)
    gui.add(camera.position, "x").min(-5).max(5).step(0.1).name("camera-X")
    gui.add(camera.position, "y").min(-5).max(5).step(0.1).name("camera-Y")
    gui.add(camera.position, "z").min(-5).max(5).step(0.1).name("camera-Z")

    //lights
    const color = { color: "#fef0e1" }
    const directionalLight = new THREE.DirectionalLight("#ffffff", 7)
    directionalLight.color = new THREE.Color(color.color)
    directionalLight.position.set(0.7, 2.7, 3.8)
    scene.add(directionalLight)
    // gui.add(directionalLight.position, "x").min(-10).max(10).step(0.1).name("Light-X")
    // gui.add(directionalLight.position, "y").min(-10).max(10).step(0.1).name("Light-y")
    // gui.add(directionalLight.position, "z").min(-10).max(10).step(0.1).name("Light-z")
    // gui.add(directionalLight , "intensity").min(3).max(10).step(0.1).name("int")
    // gui.addColor(color , "color").onChange(()=>{
    //   directionalLight.color.set(color.color)
    // })

    //mouse over
    const cursor = {
      x: 0,
      y: 0,
    }
    window.addEventListener("mousemove", (e) => {
      cursor.x = ((e.clientX / sizes.width) - 0.5) * 0.08
      cursor.y = ((e.clientY / sizes.height) - 0.5) * 0.08
    })

    //renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
    })
    renderer.setSize(sizes.width, sizes.height)

    //controler
    const controler = new OrbitControls(camera , canvas)
    controler.enableDamping = true;

    //window resize
    window.addEventListener("resize", () => {
      sizes.width = Math.min(window.innerWidth , 978)
      sizes.height = window.innerHeight

      //update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      //update render size
      renderer.setSize(978, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    //clock
    const clock = new THREE.Clock()
    let previousTime = 0
    const tick = () => {
      const elaspTime = clock.getElapsedTime()
      const dt = elaspTime - previousTime
      previousTime = elaspTime

      //update camera
      cameraGroup.position.x += (cursor.x - cameraGroup.position.x) * dt * 2
      cameraGroup.position.y += (cursor.y - cameraGroup.position.y) * dt * 5

      //update controler
      controler.update()

      //render 
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }
    tick()

  }, [])

  return (
    <>
      <canvas width={978} className="webgl"></canvas>
    </>
  )
}

export default StudyDesk
