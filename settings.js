require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADph0lo3sZ6*WQQAAIAHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3odY+QuGtERC0gj3hpFbGRjHkoosOQqVYDlhP8+gT09PQ+7s708FXXJPHnOyfwOihITtEAMTL6DqsYtpKhfUlYhMAF6E8eoBgMQQQrBBGyMc3LYwiwMlCC8Wm4pTRHrPC6*4e78Wr8Up2atLMzQyqUncB+AqjlmOPxDwIDf2xuLn2klbgTxiKZd6bQ5o3GyXOvuTTYPI4cviLdK0ydw7yNCXOMiMasTylENswViDsT15+Djxavq49DYtNZc6rQ9LamS+fJKGCcJHc6TQ7lbnBKpwXv7c*BzKKkrthAanRpBoCUKq+SbMPaWwWqqybvFKGgXZXla6Eb3Bp*gpECRHaGCYso+zTtZ7rzN0tzYt4VvXDZb*0q2oqNvW4LsxTpfs72F8C7VA+7wOeD+8pUvuvFz+Tx*Ro6tuetb+cVtUBJ4uKWW2On+gd+PZGJJvwN36nevpP+Hd*PFHtXzWPYNRx7PMm+W7QNmvhyu+JIpo9k+PL52KexSYn2SdxTKF7a+jBTTHDdU1U6bq2D5yfy6ssSNx6Sm+KLM5Oep59of8CFt6j+hXHtpxkq43QiV4NqWeMo7DRfp3ITqzmFyu5iRqNUibdgmXlEHbRFp5*PtKqU7LY6EsTycFvPDaudmt2HBVxsaOSw4J0+PilLE7AhM+PsA1CjBhNaQ4rJ47HHCAMCodVFYI*qgFyhlki7NHR8cy*VrkIvDPDRNXyoaFuc74pfYEy4nN3f9q*oEBqCqyxARgqIZJrSs2QoRAhNEwOTvbwNQoCt9E65PJ*IDEOOaUK9oqqyE0buq74cwDMumoC4rQqNfoBpMuI9tRCkuEtLz2BSwDk+4RcYJUgImMcwI+lUhqlEEJrRu0K+uNcqoJ*5VmvIjV1fAAOQPQXAEJkAQpTHPS4Koqpw04fm*yNeujwur6muBKBiAAvbXgcFqnIEByB7PeI6TZJ7jRVVVuDHXP+wP7r8Q9wkiRCHOSP*YsaaSk8xM+xgwYluWZiaakWjgo8J3q7xJ0c2X2lFg55iheacq2fk8dJx8lvkLcuxYpN7O83DJt6qdc0**EARMwDzbZlwTmdtwNRtdC3b0atdxu+4inVs*OhTeZayu5iK3hixtZOVsxsqmCLAcqS96OjyMV0FiuWI0vCwq64LJrV4*p4b21GeLUItD9HuyodVtJWc1lXfL6mwmJ3013Sq6Zi4b5jXcrj1v5Jep8roXjPFNPOhxutmlp7FTkY75t8Y6HjWo7opDqlY3DXvm9oDFBmtvJn40UfZzeOGHvXrt+t8Yo8cs+CnRf2v5hrz3HHcf*Bbk53j5lxbVQ8PtrDEpRbXAofNSHaTh7Saf5D2rLXVVxCuJ+cb4ODTmFNzv3wagyiCNyzrvh2h+hGAA6rLpHWwXcfmHTIZu2*rmre4MEqp9dMUO54hQmFdgwo9kTpBUWVXebjl1Wc0gOfUUWJKWN73FmVZVLoX0vcmA1n9GFoD7D1BLAQIUAxQAAAgIADph0lo3sZ6*WQQAAIAHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIEEAAAAAA==',
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'personal0000000001',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  
  //⚠️ Premium users settings ⚠️
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
  EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
//Need premium? Purchase one here => https://wa.me/tylor
