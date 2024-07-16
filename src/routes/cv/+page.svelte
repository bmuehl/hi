<script lang="ts">
	import { experience, skills, contact } from '$lib/store.svelte';
	import Icon from '$lib/Icon/Icon.svelte';
	import Mail from '$lib/Icon/icons/Mail.svelte';
	import Home from '$lib/Icon/icons/Home.svelte';
	import Phone from '$lib/Icon/icons/Phone.svelte';
	import Cake from '$lib/Icon/icons/Cake.svelte';
	import Link from '$lib/Icon/icons/Link.svelte';
	import Rating from '$lib/Rating/Rating.svelte';
	import PdfFactory from './PdfFactory.svelte';

	const formatDate = (date: Date, showDay = false) =>
		date.toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'short',
			day: showDay ? 'numeric' : undefined
		});

	const onclick = () => window.print();
</script>

{#snippet experienceItem(item, details = true)}
	<div class="flex justify-between">
		<div>
			<h3 class="font-bold">{item.description}</h3>
			<span class="italic">{item.title}</span>
			{#if item.bullets && details}
				<ul class="ml-6 mt-0.5 list-disc text-xs">
					{#each item.bullets as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
			{/if}
		</div>
		<div class="text-right">
			<div class="flex justify-end text-blue-500">
				{formatDate(item.startDate)}
				-
				{item.endDate ? formatDate(item.endDate) : 'present'}
			</div>
			<div>{item.place}</div>
		</div>
	</div>
{/snippet}

<main class="p-8">
	<div class="mb-4">
		<button class="link" {onclick}>Print / Save</button>
	</div>
	<PdfFactory>
		<section class="flex justify-between">
			<div class="flex flex-col gap-2">
				<div class="flex items-end gap-2">
					<h1 class="text-2xl font-bold text-blue-500">{contact.name}</h1>
					<span class="text-lg italic text-blue-300">{experience[0].description}</span>
				</div>
				<div class="flex flex-col gap-1">
					<div class="flex items-center gap-3">
						<Icon src={Mail} class="text-blue-500" />
						{contact.email}
					</div>
					<div class="flex items-center gap-3">
						<Icon src={Phone} class="text-blue-500" />
						{contact.phone}
					</div>
					<div class="flex items-center gap-3">
						<Icon src={Home} class="text-blue-500" />
						{contact.address}
					</div>
					<div class="flex items-center gap-3">
						<Icon src={Cake} class="text-blue-500" />
						{formatDate(contact.birthday, true)}
					</div>
					<div class="flex items-center gap-3">
						<Icon src={Link} class="text-blue-500" />
						<a class="abase text-blue-500" href={contact.website.url}>{contact.website.title}</a>
					</div>
				</div>
			</div>
			<img src="/assets/me.jpg" alt="Bernhard Mühl" class="h-32 w-32 rounded-full" />
		</section>

		<section>
			<h2 class="bg-blue-100 text-center text-lg font-bold text-blue-500">Profile</h2>
			<p>{contact.profile}</p>
		</section>

		<section>
			<h2 class="bg-blue-100 text-center text-lg font-bold text-blue-500">
				Professional Experience
			</h2>
			<div class="mt-2 flex flex-col gap-4">
				{#each experience.filter((e) => e.category === 'work') as item}
					{@render experienceItem(item)}
				{/each}
			</div>
		</section>

		<section>
			<h2 class="bg-blue-100 text-center text-lg font-bold text-blue-500">Education</h2>
			<div class="mt-2 flex flex-col gap-4">
				{#each experience.filter((e) => e.category === 'education' && e.status !== 'waiting') as item}
					{@render experienceItem(item, false)}
				{/each}
			</div>
		</section>

		<section>
			<h2 class="bg-blue-100 text-center text-lg font-bold text-blue-500">Languages</h2>
			<div class="mt-2 flex items-center gap-8">
				{#each contact.languages as language}
					<div class="flex flex-1 justify-between">
						<div>{language.name}</div>
						<Rating score={language.level} style="bullets" />
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h2 class="bg-blue-100 text-center text-lg font-bold text-blue-500">Skills</h2>
			<div class="mt-2 flex flex-wrap items-center gap-2.5">
				{#each [...skills, { name: 'Nyala' }, { name: 'Lemonway' }] as skill, i}
					{#if i !== 0}
						<span class="h-1.5 w-1.5 rounded-full bg-gray-800"></span>
					{/if}
					<span>{skill.name}</span>
				{/each}
			</div>
		</section>
	</PdfFactory>
</main>
