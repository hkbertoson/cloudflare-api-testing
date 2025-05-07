export const prerender = false;
import type {APIRoute} from 'astro';

export const GET: APIRoute = () => {
	return new Response(
		JSON.stringify({
			message: 'This is a GET Request',
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
};

export const POST: APIRoute = () => {
	return new Response(
		JSON.stringify({
			message: 'This is a POST Request',
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
};

export const DELETE: APIRoute = () => {
	return new Response(
		JSON.stringify({
			message: 'This is a DELETE Request',
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
};

export const PUT: APIRoute = () => {
	return new Response(
		JSON.stringify({
			message: 'This is a PUT Request',
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
};

export const PATCH: APIRoute = () => {
	return new Response(
		JSON.stringify({
			message: 'This is a PATCH Request',
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
};
