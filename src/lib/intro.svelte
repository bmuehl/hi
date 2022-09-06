<script lang="ts">
	// import * as THREE from "three";
	// import * as SC from "svelte-cubed";
	import Icon from './Icon/Icon.svelte'
	import Mail from './Icon/icons/Mail.svelte'
	import Home from './Icon/icons/Home.svelte'
	import Phone from './Icon/icons/Phone.svelte'
	import Cake from './Icon/icons/Cake.svelte'
	import Card from './Card/Card.svelte'
	import LockClosed from './Icon/icons/LockClosed.svelte'

	// let spin = 0

	// SC.onFrame(() => {
	// 	spin += 0.01;
	// });
</script>

<div class="flex flex-col">
	<div>
		<h1>Bernhard Mühl</h1>
		<p>Full Stack Developer / Software Architect</p>

		<Card>
			<div class="flex flex-col items-start">
				<div class="mb-4 flex items-center">
					<Icon icon={Mail} />
					<a href="mailto:bernhard.muehl@gmail.com" class="ml-4">bernhard.muehl@gmail.com</a>
				</div>
				<div class="mb-4 flex items-center">
					<Icon icon={Phone} />
					<a href="tel:+436605090135" class="ml-4">+43 660 *********</a>
				</div>
				<div class="mb-4 flex items-center">
					<Icon icon={Home} />
					<span class="ml-4">
						************** ******<br />
						1090 Vienna<br />
					</span>
				</div>
				<div class="flex items-center">
					<Icon icon={Cake} />
					<span class="ml-4">********</span>
				</div>
			</div>
		</Card>

		<p class="text-xs">
			Use unlock button (<Icon icon={LockClosed} size="xs" />) to show sensitive information.
		</p>
	</div>
</div>

<div class="m7-6 relative h-44 w-full">
	<!-- ​<SC.Canvas antialias alpha>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			material={new THREE.MeshStandardMaterial({ color: 0xb48ead })}
			rotation={[0, spin, spin + 0.04]}
		/>
		<SC.PerspectiveCamera position={[1, 1, 3]} zoom={1.5} />
		<SC.OrbitControls
			enableZoom={false}
			enableDamping={true}
			dampingFactor={0.05}
		/>
		<SC.AmbientLight intensity={0.75} />
		<SC.DirectionalLight intensity={0.9} position={[-2, 3, 2]} />
	</SC.Canvas> -->
</div>
