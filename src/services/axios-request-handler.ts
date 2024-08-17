// Axios Imports
import axiosInstance from '@/config/axios.config';

/**
 * Performs a GET request.
 *
 * @param {string} endPoint - The URL to hit.
 * @param {string} header - The Authorization Token.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the GET request fails.
 */
export const GET = async (endPoint: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(endPoint)
      .then(response => {
        if (response) {
          resolve(response.data);
        }
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};

/**
 * Performs a POST request.
 *
 * @param {string} endPoint - The URL to hit.
 * @param {Array<unknown> | Record<string, never>} data - The request data (optional).
 * @param {string} token - The Authorization Token.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the POST request fails.
 */
export const POST = async (
  endPoint: string,
  data: Array<unknown> | Record<string, never> | unknown = {},
): Promise<unknown> =>
  new Promise((resolve, reject) => {
    axiosInstance
      .post(endPoint, data)
      .then(response => {
        if (response) {
          resolve(response.data);
        }
      })
      .catch((error: Error) => {
        reject(error);
      });
  });

/**
 * Performs a PUT request.
 *
 * @param {string} endPoint - The URL to hit.
 * @param {Array<unknown> | Record<string, never>} data - The request data.
 * @param {string} token - The Authorization Token.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the PUT request fails.
 */
export const PUT = async (
  endPoint: string,
  data: Array<unknown> | Record<string, never> | unknown = {},
): Promise<unknown> =>
  new Promise((resolve, reject) => {
    axiosInstance
      .put(endPoint, data)
      .then(response => {
        if (response) {
          resolve(response.data);
        }
      })
      .catch((error: Error) => {
        reject(error);
      });
  });

/**
 * Performs a DELETE request.
 *
 * @param {string} endPoint - The URL to hit.
 * @param {string} header - The Authorization Token.
 * @param {unknown} data - The request data (optional).
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the DELETE request fails.
 */
export const DELETE = async (
  endPoint: string,
  data?: unknown,
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(endPoint, {
        data,
      })
      .then(res => {
        if (res) {
          resolve(res.data);
        }
      })
      .catch((error: Error) => {
        reject(error);
        throw error;
      });
  });
};
